import React from "react";
import { Route, Switch } from "react-router-dom";
import SharesList from "./base/components/SharesList/SharesList";

function App() {
  return (
    <div>
      <Switch>
        <Route exact path={"/"} render={(): JSX.Element => <div>Cactus</div>} />
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
