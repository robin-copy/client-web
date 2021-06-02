import stockActions, {
	GET_STOCK_DATA,
    // [MODULE MIDDLEWARE] IMPORT ACTIONS
} from './stock.actions';
import  {services} from './stock.services'
import {Middleware} from 'redux'

const stockMiddleware: Middleware = api => (next) => (action) => {
    next(action);
    switch (action.type) {
		case GET_STOCK_DATA:
			services.getStockData(action.stock)
				.then((response: any) => api.dispatch(stockActions.getStockDataSuccess(response)))
				.catch((error: any) => api.dispatch(stockActions.getStockDataError(error)));
			break;
        // [MODULE MIDDLEWARE] SWITCH CASE
        default: break;
    }
};

export default stockMiddleware;