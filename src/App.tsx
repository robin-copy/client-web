import React from "react";
import { Route, Switch } from "react-router-dom";
import SharesList from "./base/components/SharesList/SharesList";
import Stock from "./stock/components/Stock/Stock";
import { SearchBar } from "./base/components/SearchBar/SearchBar";

function App() {
  return (
    <div>
      <SearchBar />
      <Switch>
        <Route exact path={"/"} render={() => <SharesList />} />
        <Route
          exact
          path={"/stock"}
          render={(): JSX.Element => (
            <Stock showChart={true} stockBasicData={{ stockSymbol: "TSLA" }} />
          )}
        />
      </Switch>
    </div>
  );
}

export default App;
