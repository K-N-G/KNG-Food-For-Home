'use strict';

import React from 'react';
import { Link } from 'react-router';

const Navigation = (props) => {
    return (
        <div>
            <h1>Food for home</h1>
            <ul role="nav">
                <li><Link to="/mastermenu" activeStyle={{ color: 'red' }} >Master menu</Link></li>
                <li><Link to="/dailymenu" activeStyle={{ color: 'red' }} >Daily menu</Link></li>
            </ul>
            {props.children}
        </div>
    )
};

Navigation.propTypes = {
    children: React.PropTypes.node
}

export default Navigation;