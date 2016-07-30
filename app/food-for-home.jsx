'use strict';

import React from 'react';
import ReactDOM from "react-dom";
import { Router, Route, browserHistory } from 'react-router';
import Navigation from './views/Navigasion.jsx';
import MasterMenu from './views/menus/master-menu.jsx'
import DailyMenu from './views/menus/daily-menu.jsx'
import AddFood from './views/menus/add-food.jsx'
import EditFood from './views/menus/edit-food.jsx'

ReactDOM.render(
    <Router history={browserHistory}>
        <Route path="/" poolInterval={3000} component={Navigation}>
            <Route path="/mastermenu" url="/api/mastermenu" component={MasterMenu} />
            <Route path="/dailymenu" url="/api/mastermenu" component={DailyMenu} />
            <Route path="/mastermenu/add" url="/api/mastermenu" component={AddFood} />
            <Route path="/mastermenu/edit(/:foodId)" url="/api/mastermenu" component={EditFood} />

        </Route>
    </Router>,
    document.getElementById('root')
);