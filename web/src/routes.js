import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import Logon from './pages/Logon';
import Register from './pages/Register';

const Routes = () => {
    return (
        <Router>
            <Switch>
                <Route path="/" exact component={Logon} />
                <Route path="/register" exact component={Register} />
            </Switch>
        </Router>
    )
}

export default Routes;