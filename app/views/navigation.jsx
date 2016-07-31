'use strict';

import React from 'react';
import { Link } from 'react-router';

const Navigation = (props) => {
    let isAdmin = false;
    let isAuthenticated = props.isAuthenticated();
    if(isAuthenticated){
         isAdmin = props.isAdmin();
    }
    return (
        <div>
            <h1>Food for home</h1>
            <ul role="nav">
                {isAdmin?
                <li><Link to="/mastermenu" activeStyle={{ color: 'grey' }} >Master menu</Link></li>
                :null}
                <li><Link to="/dailymenu" activeStyle={{ color: 'grey' }} >Daily menu</Link></li>
                {isAdmin?
                <li><Link to="/mastermenu/add" activeStyle={{ color: 'grey' }} >Add food</Link></li>
                :null}
                {!isAuthenticated?
                <li><Link to="/users/register" activeStyle={{ color: 'grey' }} >Регистриране</Link></li>
                :null}
                {!isAuthenticated?
                <li><Link to="/users/login" activeStyle={{ color: 'grey' }} >Вход</Link></li>
                :null}
                {isAuthenticated?
                <li><Link to="/users/logout" activeStyle={{ color: 'grey' }} >Изход</Link></li>
                :null}
            </ul>
        </div>
    )
};

Navigation.propTypes = {
    isAuthenticated: React.PropTypes.func,
    isAdmin: React.PropTypes.func
};

export default Navigation;