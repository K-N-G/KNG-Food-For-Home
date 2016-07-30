'use strict';

import React from 'react';
import { Link } from 'react-router';

const Navigation = (props) => {
    return (
        <div>
            <h1>Food for home</h1>
            <ul role="nav">
                <li><Link to="/mastermenu" activeStyle={{ color: 'grey' }} >Master menu</Link></li>
                <li><Link to="/dailymenu" activeStyle={{ color: 'grey' }} >Daily menu</Link></li>
                <li><Link to="/mastermenu/add" activeStyle={{ color: 'grey' }} >Add food</Link></li>
            </ul>
            {props.children}
        </div>
    )
};




Navigation.propTypes = {
    children: React.PropTypes.node
}

export default Navigation;