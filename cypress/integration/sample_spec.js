describe('End to end test', function () {
    beforeEach(function (){
        cy.intercept(
            {
                method: 'GET', // Route all GET requests
                url: '/users/defaultUser', // that have a URL that matches '/users/*'
            },
            ['402880a079cfb78f0179cfb794320000'] // and force the response to be: []
        )
        cy.intercept(
            {
                method:'GET',
                url:'users/402880a079cfb78f0179cfb794320000/shares'
            },
            ["[{ \"stockSymbol\": \"TSLA\",\n" +
            "        \"price\": 623.9,\n" +
            "        \"stockPrices\": [ --> Devuelve los ultimos 10 dias\n" +
            "          {\n" +
            "            \"price\": 176.31199999999998,\n" +
            "            \"date\": 1591056000\n" +
            "          },\n" +
            "          {\n" +
            "            \"price\": 176.592,\n" +
            "            \"date\": 1591142400\n" +
            "          },\n" +
            "          {\n" +
            "            \"price\": 172.876,\n" +
            "            \"date\": 1591228800\n" +
            "          }\n" +
            "        ],\n" +
            "        \"sharesQuantity\": 4,\n" +
            "        \"priceStatus\": \"DECREASED\"\n" +
            "    }, \n" +
            "  { \"stockSymbol\": \"FB\",\n" +
            "        \"price\": 623.9,\n" +
            "        \"stockPrices\": [ --> Devuelve los ultimos 10 dias\n" +
            "          {\n" +
            "            \"price\": 176.31199999999998,\n" +
            "            \"date\": 1591056000\n" +
            "          },\n" +
            "          {\n" +
            "            \"price\": 176.592,\n" +
            "            \"date\": 1591142400\n" +
            "          },\n" +
            "          {\n" +
            "            \"price\": 172.876,\n" +
            "            \"date\": 1591228800\n" +
            "          }\n" +
            "        ],\n" +
            "        \"sharesQuantity\": 4,\n" +
            "        \"priceStatus\": \"DECREASED\"\n" +
            "    }, \n" +
            "  { \"stockSymbol\": \"AAPL\",\n" +
            "        \"price\": 623.9,\n" +
            "        \"stockPrices\": [ --> Devuelve los ultimos 10 dias\n" +
            "          {\n" +
            "            \"price\": 176.31199999999998,\n" +
            "            \"date\": 1591056000\n" +
            "          },\n" +
            "          {\n" +
            "            \"price\": 176.592,\n" +
            "            \"date\": 1591142400\n" +
            "          },\n" +
            "          {\n" +
            "            \"price\": 172.876,\n" +
            "            \"date\": 1591228800\n" +
            "          }\n" +
            "        ],\n" +
            "        \"sharesQuantity\": 4,\n" +
            "        \"priceStatus\": \"DECREASED\"\n" +
            "    }]"]
        )
    })
    it('Visit page and have main components', function () {
       cy.visit('http://192.168.0.121:3000');
       cy.get('.stock-section');
       cy.get('.portfolio-summary');
    });

    it('should type in searchbar and find a stock', function () {
        cy.visit('http://192.168.0.121:3000');
        cy.get('.search-bar-input')
            .type('aapl');
        cy.get('.stock-section').find('.list-container').children().should('have.length', 1)
        cy.get('.empty-list-message-container').should('not.exist');

    });

    it('should type in searchbar and find no stock', function () {
        cy.visit('http://192.168.0.121:3000');
        cy.get('.search-bar-input')
            .type('z');
        cy.get('.stock-section').find('.list-container').children().should('have.length', 1)
    });

    it('find a stock and click it', function () {
        cy.visit('http://192.168.0.121:3000');
        cy.get('.search-bar-input')
            .type('aapl');
        cy.get('.stock-section').find('.list-container').should('have.length', 1);
        cy.get('[data-testid=shareListItem]').click();
        cy.get('.stock').find('.graph');
        cy.get('.sub-header2')
        cy.get('h3');
        cy.get('.table');
        cy.get('.stock-volume-data').children().should('have.length', 5);
        cy.get('.stock-value-data').children().should('have.length', 5);
    });

    it('should enter and exit a stock', function () {
            cy.visit('http://192.168.0.121:3000');
            cy.get('.search-bar-input')
                .type('aapl');
            cy.get('.stock-section').find('.list-container').should('have.length', 1);
            cy.get('[data-testid=shareListItem]').click();
            cy.get('.stock');
            cy.get('[data-testid="cross-button"]').click();
            cy.get('.portfolio-summary');
    });
});

describe('end to end test without data', function () {
    beforeEach(function (){
        cy.intercept(
            {
                method: 'GET', // Route all GET requests
                url: '/users/defaultUser', // that have a URL that matches '/users/*'
            },
            [''] // and force the response to be: []
        )
    })

    it('should show empty share list', function () {
        cy.visit('http://192.168.0.121:3000');
           cy.get('[data-testid="emptyShareListContainer"]');
           cy.get('[data-testid="emptyDataContainer"]');
    });
})
