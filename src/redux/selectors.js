import { createSelector } from "reselect";

export const selectShares = (state) => state.base.sharesList;
export const selectSearchInputText = (state) => state.base.searchInputText;

export const selectFilteredShares = createSelector(
  [selectShares, selectSearchInputText],
  (shares, searchInputText) =>
    searchInputText === ""
      ? shares
      : shares.filter((share) =>
          share.stockSymbol
            .toLowerCase()
            .includes(searchInputText.toLowerCase())
        )
);
