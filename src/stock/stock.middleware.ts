import stockActions, {
    // [MODULE MIDDLEWARE] IMPORT ACTIONS
} from './stock.actions';
import  {services} from './stock.services'
import {Middleware} from 'redux'

const stockMiddleware: Middleware = api => (next) => (action) => {
    next(action);
    switch (action.type) {
        // [MODULE MIDDLEWARE] SWITCH CASE
        default: break;
    }
};

export default stockMiddleware;