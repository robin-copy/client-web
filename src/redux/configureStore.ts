import { createBrowserHistory } from "history";
import { applyMiddleware, compose, createStore } from "redux";
import { connectRouter, routerMiddleware } from "connected-react-router";
import thunk from "redux-thunk";
import logger from "redux-logger";
import rootReducer from "./rootReducer";
import commonMiddleware from "../common/common.middleware";
import stockMiddleware from "../stock/stock.middleware";
import baseMiddleware from "../base/base.middleware";
// [CONFIGURE STORE] IMPORT MIDDLEWARE

const history = createBrowserHistory();

const middleware = routerMiddleware(history);

const store =
  process.env.NODE_ENV === "production"
    ? createStore(
        rootReducer(history),
        undefined,
        compose(
          applyMiddleware(
            thunk,
            middleware,
            commonMiddleware,
            stockMiddleware,
            baseMiddleware
            // [CONFIGURE STORE] ADD MIDDLEWARE PROD
          )
        )
      )
    : createStore(
        rootReducer(history),
        undefined,
        compose(
          applyMiddleware(
            thunk,
            logger,
            middleware,
            commonMiddleware,
            stockMiddleware,
            baseMiddleware
            // [CONFIGURE STORE] ADD MIDDLEWARE DEV
          )
        )
      );

export { store, history };
export type AppDispatch = typeof store.dispatch;
