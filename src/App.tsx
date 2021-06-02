import React from "react";
import { Route, Switch } from "react-router-dom";
import SharesList from "./base/components/SharesList/SharesList";
import Stock from "./stock/components/Stock/Stock";
import StockPage from "./base/components/StockPage/MyStocksSection";

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
        <Route exact path={"/"} component={StockPage} />
      </Switch>
    </div>
  );
}

export default App;
