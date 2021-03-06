import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import Logon from './pages/Logon';
import Register from './pages/Register';
import Profile from './pages/Profile';
import NewIncident from './pages/NewIncident';

const Routes = () => {
    return (
        <Router>
            <Switch>
                <Route path="/" exact component={Logon} />
                <Route path="/register" exact component={Register} />
                <Route path="/profile" exact component={Profile} />
                <Route path="/incidents/new" exact component={NewIncident} />
            </Switch>
        </Router>
    )
}

export default Routes;