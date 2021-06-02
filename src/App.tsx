import React from "react";
import { Route, Switch } from "react-router-dom";
import MyStockSection from "./base/components/StockPage/MyStocksSection";

function App() {
  return (
    <div>
      <Switch>
        {/*<Route*/}
        {/*  exact*/}
        {/*  path={"/"}*/}
        {/*  render={(): JSX.Element => (*/}
        {/*    <Stock showChart={true} stockBasicData={{ stockSymbol: "TSLA" }} />*/}
        {/*  )}*/}
        {/*/>*/}
        <Route exact path={"/"} component={MyStockSection} />
      </Switch>
    </div>
  );
}

export default App;
