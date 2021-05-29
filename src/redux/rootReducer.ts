import { combineReducers } from 'redux';
import { connectRouter } from 'connected-react-router';
import { i18nReducer } from "react-redux-i18n";
import commonReducer from '../common/common.reducer';
import stockReducer from '../stock/stock.reducer';
// [ROOT REDUCER] IMPORT REDUCER


const createRootReducer = (history : any) => combineReducers({
    i18n: i18nReducer,
    router: connectRouter(history),
    common: commonReducer,
	stock: stockReducer,
    // [ROOT REDUCER] ADD REDUCER
});


export default createRootReducer;

