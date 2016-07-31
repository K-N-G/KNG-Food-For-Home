'use strict';

import React from 'react';

class LogoutUser extends React.Component {
    constructor(context) {
        super(context);
        this.handleLogoutUser = this.handleLogoutUser.bind(this);
    }

    handleLogoutUser() {
        this.context.authService.logoutUser();
        this.currentUser = {};
        this.context.router.push('/');
    }

    render() {
        return(
            <div className="food-form">
                Изход от приложението
                <button className="food-button" onClick={this.handleLogoutUser}>Изход</button>
            </div>
        )
    }
}

LogoutUser.propTypes = {
    route: React.PropTypes.object
};

LogoutUser.contextTypes = {
    router: React.PropTypes.object,
    authService: React.PropTypes.object
};

export default LogoutUser;