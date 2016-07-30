'use strict';

import React from 'react';
import { Link } from 'react-router';

const Navigation = (props) => {
    let isAuthenticated = props.isAuthenticated();
    let isAdmin = props.isAdmin;
    return (
        <div>
            <h1>Food for home</h1>
            <ul role="nav">

                <li><Link to="/mastermenu" activeStyle={{ color: 'grey' }} >Master menu</Link></li>

                <li><Link to="/dailymenu" activeStyle={{ color: 'grey' }} >Daily menu</Link></li>
                <li><Link to="/mastermenu/add" activeStyle={{ color: 'grey' }} >Add food</Link></li>
                {isAuthenticated ?
                <li><Link to="/users/register" activeStyle={{ color: 'grey' }} >Регистриране</Link></li>
                : null}
                {!isAuthenticated ?
                <li><Link to="/users/login" activeStyle={{ color: 'grey' }} >Вход</Link></li>
                : null}
            </ul>
        </div>
    )
};

Navigation.propTypes = {
    isAuthenticated: React.PropTypes.func,
    isAdmin: React.PropTypes.bool
};

export default Navigation;