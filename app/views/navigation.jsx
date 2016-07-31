'use strict';

import React from 'react';
import { Link } from 'react-router';

const Navigation = () => {
    return (
        <div>
            <h1>Food for home</h1>
            <ul role="nav">
                <li><Link to="/mastermenu" activeStyle={{ color: 'grey' }} >Master menu</Link></li>
                <li><Link to="/dailymenu" activeStyle={{ color: 'grey' }} >Daily menu</Link></li>
                <li><Link to="/mastermenu/add" activeStyle={{ color: 'grey' }} >Add food</Link></li>
                <li><Link to="/users/register" activeStyle={{ color: 'grey' }} >Регистриране</Link></li>
                <li><Link to="/users/login" activeStyle={{ color: 'grey' }} >Вход</Link></li>

            </ul>
        </div>
    )
};

Navigation.propTypes = {
    isAuthenticated: React.PropTypes.func,
    isAdmin: React.PropTypes.bool
};

export default Navigation;