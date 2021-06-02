import { SearchBar } from "./SearchBar";
import { act, fireEvent, render } from "@testing-library/react";
import React from "react";
import userEvent from "@testing-library/user-event";

describe(SearchBar, () => {
  let getByTestId;
  let onChange;

  beforeEach(async () => {
    onChange = jest.fn().mockName("onChange");
    ({ getByTestId } = render(<SearchBar onChange={onChange} />));
  });

  describe("typing TSLA", () => {
    let searchInputElement;
    beforeEach(async () => {
      searchInputElement = getByTestId("searchInput");
      await userEvent.type(searchInputElement, "TSLA", {
        allAtOnce: false,
      });
    });
    it("should display TSLA", async () => {
      expect(searchInputElement.value).toBe("TSLA");
    });

    it("should call onChange with TSLA", async () => {
      // expect(onChange).toHaveBeenCalledTimes(4);
      expect(onChange).toHaveBeenCalledWith("TSLA");
    });
  });

  describe("removing text", () => {
    let searchInputElement;

    beforeEach(async () => {
      searchInputElement = getByTestId("searchInput");
      await userEvent.type(searchInputElement, "TSLA");
      await userEvent.clear(searchInputElement);
    });

    it("should display no value", () => {
      expect(searchInputElement.value).toBe("");
    });
    it("should call onChange with TSLA", async () => {
      // expect(onChange).toHaveBeenCalledTimes(4);
      expect(onChange).toHaveBeenCalledWith("");
    });
  });
});
