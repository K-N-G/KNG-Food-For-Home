'use strict';

import React from 'react';
import ReactDOM from "react-dom";
import { Router, Route, hashHistory } from 'react-router';
import Navigation from './views/Navigasion.jsx';
import MasterMenu from './views/menus/master-menu.jsx'
import DailyMenu from './views/menus/daily-menu.jsx'

ReactDOM.render(
    <Router history={hashHistory}>
        <Route path="/" component={Navigation}>
            <Route path="/mastermenu" url="/api/mastermenu" component={MasterMenu} />
            <Route path="/dailymenu" url="/api/mastermenu" component={DailyMenu} />
        </Route>
    </Router>,
    document.getElementById('root')
);