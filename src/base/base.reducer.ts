import {BaseState, GET_SHARES_LIST, GET_SHARES_LIST_ERROR, GET_SHARES_LIST_SUCCESS,} from './base.actions';
import {ActionTypes} from "../redux/actions";
import {REQUEST_STATUS} from "../utils/consts";
import {REHYDRATE} from "redux-persist/es/constants";

const initialState = {
	sharesList: [
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
    // [MODULE REDUCER] INITIAL STATE
};

const baseReducer = (state = initialState, action: ActionTypes): BaseState => {
    switch (action.type) {
		case GET_SHARES_LIST: return {...state, getSharesListStatus: REQUEST_STATUS.LOADING};
		case GET_SHARES_LIST_SUCCESS: return {...state, getSharesListStatus: REQUEST_STATUS.SUCCESS, sharesList: action.response};
		case GET_SHARES_LIST_ERROR: return {...state, getSharesListStatus: REQUEST_STATUS.ERROR};

        // [MODULE REDUCER] SWITCH CASE

		case REHYDRATE: return {
			...state,
			sharesList: initialState.sharesList
		}
        default: return state;
    };
}

export default baseReducer;
