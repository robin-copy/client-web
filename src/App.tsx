import React from "react";
import { Route, Switch } from "react-router-dom";
import MyStockSection from "./base/components/StockPage/MyStocksSection";
import Stock from "./stock/components/Stock/Stock";
import { SearchBar } from "./base/components/SearchBar/SearchBar";

function App() {
  return (
    <div>
      <Switch>
        <Route exact path={"/"} component={MyStockSection} />
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
