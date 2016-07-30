'use strict';

import React from 'react';
import Navigation from './navigation';
import AuthenticationService from '../.././services/authentication-service';

class MainView extends React.Component {
    constructor(props){
        super(props);
        this.state = {data: []};
        this.authenticationService = new AuthenticationService('/api/users');
    }

    getChildContext() {
        return {
            authService: this.authenticationService
        };
    }

    render() {
        return (
            <div>
                <Navigation data={this.state.data} isAuthenticated={this.authenticationService.isAuthenticated} />

                {/* Routed components go here... */}
                {this.props.children}
            </div>);
    }
}

MainView.propTypes = {
    children: React.PropTypes.node,
    url: React.PropTypes.string,
    pollInterval: React.PropTypes.number,
    route: React.PropTypes.object
};

MainView.childContextTypes = {
    authService: React.PropTypes.object
};

export default MainView;