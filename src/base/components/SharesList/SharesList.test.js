import React from "react";
import { render } from "@testing-library/react";
import { ListItem, SharesList } from "./SharesList";
import userEvent from "@testing-library/user-event";

describe("SharesList", () => {
  let getByTestId;
  let queryByTestId;
  let sharesList = [
    {
      stockSymbol: "AAPL",
      price: 105.67,
      stockPrices: [],
      sharesQuantity: 120,
      priceStatus: "DECREASED",
    },
    {
      stockSymbol: "TSLA",
      price: 227.75,
      stockPrices: [],
      sharesQuantity: 75,
      priceStatus: "EQUAL",
    },
    {
      stockSymbol: "FB",
      price: 113.05,
      stockPrices: [],
      sharesQuantity: 110,
      priceStatus: "INCREASED",
    },
  ];

  describe("non empty share list", () => {
    let shareListContainerElement;

    beforeEach(async () => {
      ({ getByTestId, queryByTestId } = render(
        <SharesList sharesList={sharesList} />
      ));
      shareListContainerElement = getByTestId("shareListContainer");
    });

    it("should contain all the shares of the shareList prop", () => {
      expect(shareListContainerElement.children.length).toEqual(3);
    });

    it("should not show empty list message info", () => {
      const emptyListContainerElement = queryByTestId(
        "emptyShareListContainer"
      );
      expect(emptyListContainerElement).toBeNull();
    });
  });

  describe("an empty share list", () => {
    let getByTestId;
    let shareListContainerElement;

    beforeEach(async () => {
      sharesList = [];
      ({ getByTestId } = render(<SharesList sharesList={sharesList} />));
      shareListContainerElement = getByTestId("shareListContainer");
    });

    it("should contain a info text message when shareList prop is empty", () => {
      const emptyListSpanElement = getByTestId("emptyShareListSpan");
      expect(emptyListSpanElement.textContent).toEqual("No shares");
    });
  });
});

describe("ListItem", () => {
  let getByTestId;
  let onClick;
  let mockShare = {
    stockSymbol: "AAPL",
    price: 105.67,
    stockPrices: [],
    sharesQuantity: 120,
    priceStatus: "DECREASED",
  };

  describe("a share on the list", () => {
    beforeEach(async () => {
      ({ getByTestId } = render(<ListItem share={mockShare} />));
    });

    it("should have company name", () => {
      const shareNameElement = getByTestId("shareName");
      expect(shareNameElement.textContent).toEqual("AAPL");
    });

    it("should have share volume", () => {
      const shareQuantityElement = getByTestId("shareQuantity");
      expect(shareQuantityElement.textContent).toEqual("120 SHARES");
    });

    it("should have share price", () => {
      const sharePriceElement = getByTestId("sharePrice");
      expect(sharePriceElement.textContent).toEqual("$105.67");
    });

    it("should has a priceContainer with a className based on the priceStatus prop", () => {
      const sharePriceContainerElement = getByTestId("sharePriceContainer");
      expect(sharePriceContainerElement.className).toContain(
        "share-price-status-decreased"
      );
    });
  });

  describe("clicking a share on the list", () => {
    beforeEach(async () => {
      onClick = jest.fn().mockName("onClick");

      ({ getByTestId } = render(
        <ListItem share={mockShare} onClick={onClick} />
      ));

      userEvent.click(getByTestId("shareListItem"));
    });

    it("should call the onClick function", () => {
      expect(onClick).toBeCalled();
    });
  });
});
