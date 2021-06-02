import React, { FunctionComponent } from "react";
import { Route, Switch } from "react-router-dom";
import SearchBar from "./base/components/SearchBar/SearchBar";

function App() {
  return (
    <div>
      <Switch>
        <SearchBar />
        <Route path={"/"} render={(): JSX.Element => <div>Cactus</div>} />
      </Switch>
    </div>
  );
}

export default App;
