import React from 'react';
import ReactDOM from 'react-dom';
import { Route, Switch, BrowserRouter as Router } from 'react-router-dom'
import { library } from '@fortawesome/fontawesome-svg-core'
import * as serviceWorker from './serviceWorker';
import 'bootstrap/dist/css/bootstrap.min.css';
import './styles/common.css';

import Homepage from './views/Homepage';
import Schedule from './views/Schedule';
import Templates from './views/Templates';
import Header from './components/Header';
import Scheduled from './views/Scheduled';
import Redirection from './views/Redirection';
import Creation from './views/Creation';
import Created from './views/Created';
import Live from './views/Live';
import Voting from './views/Voting';
import Voted from './views/Voted';

import { faVideo, faCalendarAlt, faPoll, faLightbulb} from '@fortawesome/free-solid-svg-icons'
library.add(faVideo, faCalendarAlt, faPoll, faLightbulb)

/**
 * Switches between different routes based on the url
 */
const routing = (
    <Router>
        <Header/>
        <Switch>
            <Route exact path="/" component={Homepage}/>
            <Route exact path="/schedule" component={Schedule} />
            <Route exact path="/templates" component={Templates} />
            <Route exact path="/create" component={Creation} />
            <Route exact path="/live" component={Live} />
            <Route exact path="/voted" component={Voted} />
            <Route exact path="/vote" component={Voting} />
            <Route exact path="/redirection" component={Redirection} />
            <Route exact path="/scheduled" component={Scheduled} />
            <Route exact path="/created" component={Created} />
            <Route path='*' component={Homepage}/>
        </Switch>
    </Router>
)

ReactDOM.render(routing, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
