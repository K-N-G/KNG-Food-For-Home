'use strict';

import React from 'react';
import ReactDOM from "react-dom";
import { Router, Route, browserHistory } from 'react-router';
import MainView from './views/main-view.jsx';
import MasterMenu from './views/menus/master-menu.jsx'
import DailyMenu from './views/menus/daily-menu.jsx'
import AddFood from './views/menus/add-food.jsx'
import EditFood from './views/menus/edit-food.jsx'
import DeleteFood from './views/menus/delete-food.jsx'
import RegisterUser from './views/users/register-user.jsx'
import LoginUser from './views/users/login-user.jsx'
import LogoutUser from './views/users/logout-user.jsx'
import User from './views/users/user.jsx'

ReactDOM.render(
    <Router history={browserHistory}>
        <Route path="/" component={MainView}>
            <Route path="/mastermenu" url="/api/mastermenu" component={MasterMenu} />
            <Route path="/dailymenu" url="/api/dailymenu" component={DailyMenu} />
            <Route path="/mastermenu/add" url="/api/mastermenu" component={AddFood} />
            <Route path="/mastermenu/edit(/:foodId)" url="/api/mastermenu" component={EditFood} />
            <Route path="/mastermenu/delete(/:foodId)" url="/api/mastermenu" component={DeleteFood} />
            <Route path="/users/register" url="/api/users" component={RegisterUser} />
            <Route path="/users/login" url="/api/users/Token" component={LoginUser} />
            <Route path="/users/show" url="/api/users" component={User} />
            <Route path="/users/logout" component={LogoutUser} />
        </Route>
    </Router>,
    document.getElementById('root')
);