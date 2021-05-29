import stockActions, {
    // [MODULE REDUCER] IMPORT ACTIONS
} from './stock.actions';
import {ActionTypes} from "../redux/actions";
import  {StockState} from "./stock.actions"
import {REQUEST_STATUS} from "../utils/consts";

const initialState = {
    // [MODULE REDUCER] INITIAL STATE
};

const stockReducer = (state = initialState, action: ActionTypes): StockState => {
    switch (action.type) {
        // [MODULE REDUCER] SWITCH CASE
        default: return state;
    };
}

export default stockReducer;