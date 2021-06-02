import stockActions, {
  GET_STOCK_DATA,
  GET_STOCK_DATA_SUCCESS,
  GET_STOCK_DATA_ERROR,

  // [MODULE REDUCER] IMPORT ACTIONS
} from "./stock.actions";
import { ActionTypes } from "../redux/actions";
import { StockState } from "./stock.actions";
import { REQUEST_STATUS } from "../utils/consts";

const initialState = {
  // [MODULE REDUCER] INITIAL STATE
};

const stockReducer = (
  state = initialState,
  action: ActionTypes
): StockState => {
  switch (action.type) {
    case GET_STOCK_DATA:
      return { ...state, getStockDataStatus: REQUEST_STATUS.LOADING };
    case GET_STOCK_DATA_SUCCESS:
      return {
        ...state,
        getStockDataStatus: REQUEST_STATUS.SUCCESS,
        stockData: action.response,
      };
    case GET_STOCK_DATA_ERROR:
      return { ...state, getStockDataStatus: REQUEST_STATUS.ERROR };

    // [MODULE REDUCER] SWITCH CASE
    default:
      return state;
  }
};

export default stockReducer;
