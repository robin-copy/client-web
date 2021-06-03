import { MyStocksSection } from "./MyStocksSection";
import { render } from "@testing-library/react";
import axios from "axios";
import React from "react";

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

describe("MyStocksSection", () => {
  jest.mock("axios");
  // var axios = require("axios");
  //If you use get, post write as below, If you are using axios(config) dont need to mock below
  jest.mock("axios", () => ({ create: jest.fn() }));

  describe("", () => {
    let comp;
    let shareListContainerElement;

    beforeEach(() => {
      comp = render(<MyStocksSection />);
      shareListContainerElement = comp.getByTestId("shareListContainer");
    });

    it("should contain all the shares of the shareList prop", () => {
      expect(shareListContainerElement.children.length).toEqual(3);
    });
  });
});
