import React from "react";
import { Route, Switch } from "react-router-dom";
import SharesList from "./base/components/SharesList/SharesList";
import Stock from "./stock/components/Stock/Stock";

function App() {
  return (
    <div>
      <Switch>
        <Route
          path={"/"}
          render={(): JSX.Element => (
            <Stock showChart={true} stockBasicData={{ stockSymbol: "TSLA" }} />
          )}
        />{" "}
        <Route
          exact
          path={"/list"}
          render={(): JSX.Element => <SharesList />}
        />
      </Switch>
    </div>
  );
}

export default App;
