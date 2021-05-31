import { createBrowserHistory } from 'history'
import {applyMiddleware, compose, createStore} from 'redux'
import { connectRouter, routerMiddleware } from 'connected-react-router'
import { persistStore, persistReducer } from 'redux-persist'
import storage from 'redux-persist/lib/storage'
import thunk from 'redux-thunk'
import logger from 'redux-logger';
import rootReducer from "./rootReducer";
import commonMiddleware from '../common/common.middleware';
import stockMiddleware from '../stock/stock.middleware';
import baseMiddleware from '../base/base.middleware';
// [CONFIGURE STORE] IMPORT MIDDLEWARE

const persistConfig = {
    key: 'root',
    storage,
};


const history = createBrowserHistory();
const persistedReducer = persistReducer(persistConfig, rootReducer(history));

const middleware = routerMiddleware(history);

const store = process.env.NODE_ENV === 'production' ? createStore(
    persistedReducer,
    undefined,
    compose(applyMiddleware(
        thunk,
        middleware,
        commonMiddleware,
		stockMiddleware,
		baseMiddleware,
        // [CONFIGURE STORE] ADD MIDDLEWARE PROD
    ))
) : createStore(
    persistedReducer,
    undefined,
    compose(applyMiddleware(
        thunk,
        logger,
        middleware,
        commonMiddleware,
		stockMiddleware,
		baseMiddleware,
        // [CONFIGURE STORE] ADD MIDDLEWARE DEV
    ))
);

const persistor = persistStore(store);

export { store, persistor, history };
export type AppDispatch = typeof store.dispatch
