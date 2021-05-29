import React, {FunctionComponent} from 'react';
import {Route, Switch} from 'react-router-dom';

function App() {
    return (
        <div>
            <Switch>
                <Route path={'/'} render={(): JSX.Element => <div>Cactus</div>}/>
            </Switch>
        </div>
    );
}



export default App;
