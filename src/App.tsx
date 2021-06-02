import React, { FunctionComponent } from "react";
import { Route, Switch } from "react-router-dom";
import SearchBar from "./base/components/SearchBar/SearchBar";
import Stock from "./stock/components/Stock/Stock";

function App() {
  return (
    <div>
      <SearchBar />
      <Switch>
        <Route
          path={"/"}
          render={(): JSX.Element => (
            <Stock showChart={true} stockBasicData={{ stockSymbol: "TSLA" }} />
          )}
        />
      </Switch>
    </div>
  );
}

export default App;
