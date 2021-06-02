import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import App from "./App";
import { history, store } from "./redux/configureStore";
import { ConnectedRouter } from "connected-react-router";
import "./style/main.scss";
import "./style/styles.scss";

function startApp() {
  ReactDOM.render(
    <Provider store={store}>
      <ConnectedRouter history={history}>
        <App />
      </ConnectedRouter>
    </Provider>,
    document.getElementById("root")
  );
}

startApp();
