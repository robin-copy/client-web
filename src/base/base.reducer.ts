import {
  CHANGE_SEARCH_INPUT,
  GET_SHARES_LIST,
  GET_SHARES_LIST_ERROR,
  GET_SHARES_LIST_SUCCESS,
} from "./base.actions";
import { ActionTypes } from "../redux/actions";
import { REQUEST_STATUS } from "../utils/consts";
// [MODULE REDUCER] IMPORT ACTIONS

const initialState = {
  sharesList: [
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
  ],
  searchInputText: "",
  // [MODULE REDUCER] INITIAL STATE
};

const baseReducer = (state = initialState, action: ActionTypes) => {
  switch (action.type) {
    case CHANGE_SEARCH_INPUT:
      return { ...state, searchInputText: action.text };
    case GET_SHARES_LIST:
      return { ...state, getSharesListStatus: REQUEST_STATUS.LOADING };
    case GET_SHARES_LIST_SUCCESS:
      return {
        ...state,
        getSharesListStatus: REQUEST_STATUS.SUCCESS,
        sharesList: action.response,
      };
    case GET_SHARES_LIST_ERROR:
      return { ...state, getSharesListStatus: REQUEST_STATUS.ERROR };

    // [MODULE REDUCER] SWITCH CASE
    default:
      return state;
  }
};

export default baseReducer;
