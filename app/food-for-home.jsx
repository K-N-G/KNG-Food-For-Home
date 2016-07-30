'use strict';

import React from 'react';
import ReactDOM from "react-dom";
import { Router, Route, hashHistory } from 'react-router';
import KnowledgeTester from './views/knowledge-tester.jsx';
import About from './views/about.jsx';
import Repos from './views/repos.jsx';
import MasterMenu from './views/master-menu.jsx'

ReactDOM.render(
    <Router history={hashHistory}>
        <Route path="/" component={KnowledgeTester}>
            <Route path="/about" component={About} />
            <Route path="/repos" component={Repos} />
            <Route path="/mastermenu" url="/api/mastermenu" component={MasterMenu} />
        </Route>
    </Router>,
    document.getElementById('root')
);