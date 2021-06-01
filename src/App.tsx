import React, {FunctionComponent} from 'react';
import {Route, Switch} from 'react-router-dom';
import Stock from "./stock/components/Stock/Stock";

function App() {
    return (
        <div>
            <Switch>
                <Route path={'/'} render={(): JSX.Element => <Stock/>}/>
            </Switch>
        </div>
    );
}



export default App;
