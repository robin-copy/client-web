import React from 'react';
import {render} from '@testing-library/react';
import {ListItem, SharesList} from "./SharesList";
import userEvent from "@testing-library/user-event";

describe('SharesList', () => {
    let getByTestId;
    let queryByTestId;
    let sharesList = [
        {
            stockSymbol: "AAPL",
            price: 105.67,
            volume: 120
        },
        {
            stockSymbol: "TSLA",
            price: 227.75,
            volume: 75
        },
        {
            stockSymbol: "FB",
            price: 113.05,
            volume: 110
        },
    ]

    describe('non empty share list', () => {
        let shareListContainerElement;

        beforeEach(async () => {
            ({getByTestId, queryByTestId} = render(<SharesList sharesList={sharesList}/>));
            shareListContainerElement = getByTestId('shareListContainer');
        })

        it('should contain all the shares of the shareList prop', () => {
            expect(shareListContainerElement.children.length).toEqual(3);
        })

        it('should not show empty list message info', () => {
            const emptyListSpanElement = queryByTestId('emptyShareListSpan')
            expect(emptyListSpanElement).toBeNull();
        })
    })

    describe('an empty share list', () => {
        let getByTestId;
        let shareListContainerElement;

        beforeEach(async () => {
            sharesList = [];
            ({getByTestId} = render(<SharesList sharesList={sharesList}/>));
            shareListContainerElement = getByTestId('shareListContainer');
        })

        it('should contain a info text message when shareList prop is empty', () => {
            const emptyListSpanElement = getByTestId('emptyShareListSpan');
            expect(emptyListSpanElement.textContent).toEqual("You have not purchased any shares yet")
        })
    })
})

describe('ListItem', () => {
    let getByTestId;
    let onClick;
    let mockShare = {
        stockSymbol: 'AAPL',
        price: 105.67,
        volume: 120
    };

    describe('a share on the list', () => {
        beforeEach(async () => {
            ({getByTestId} = render(<ListItem share={mockShare}/>));
        })

        it('should have company name', () => {
            const nameElement = getByTestId('shareName');
            expect(nameElement.textContent).toEqual('AAPL');
        })

        it('should have share volume', () => {
            const nameElement = getByTestId('shareVolume');
            expect(nameElement.textContent).toEqual("120 SHARES");
        })

        it('should have share price', () => {
            const nameElement = getByTestId('sharePrice');
            expect(nameElement.textContent).toEqual("$105.67");
        })
    })

    describe('clicking a share on the list', () => {
        beforeEach(async () => {
            onClick = jest.fn().mockName("onClick");

            ({getByTestId} = render(<ListItem share={mockShare} onClick={onClick}/>));

            userEvent.click(getByTestId('shareListItem'))
        })

        it('should call the onClick function', () => {
            expect(onClick).toBeCalled();
        })
    })
})
