import React from 'react';
import ReactDOM from 'react-dom';
import { Route, Switch, BrowserRouter as Router } from 'react-router-dom'
import * as serviceWorker from './serviceWorker';
import 'bootstrap/dist/css/bootstrap.min.css';
import './styles/common.css';

import Homepage from './views/Homepage';
import Templates from './views/Templates';
import Header from './components/Header';
import Scheduled from './views/Scheduled';

/**
 * Switches between different routes based on the url
 */
const routing = (
    <Router>
        <Header/>
        <Switch>
            <Route exact path="/" component={Homepage} />
            <Route exact path="/templates" component={Templates} />
            <Route exact path="/scheduled" component={Scheduled} />
        </Switch>
    </Router>
)

ReactDOM.render(routing, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
