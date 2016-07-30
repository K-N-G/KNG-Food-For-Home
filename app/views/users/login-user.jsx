'use strict';

import React from 'react';

class LoginUser extends React.Component {
    constructor(props, context) {
        super(props, context);
        this.state = {username: '', password: ''};
        this.handleUsername = this.handleUsername.bind(this);
        this.handlePassword = this.handlePassword.bind(this);
        this.handleLoginUser = this.handleLoginUser.bind(this);
    }

    handleUsername(event) {
        this.setState({username: event.target.value});
    }

    handlePassword(event) {
        this.setState({password: event.target.value});
    }

    handleLoginUser() {
        let user = {
            username: this.state.username,
            password: this.state.password
        };

        this.context.authService.loginUser(user).then(() => {
            let path = '/users/show';
            this.context.router.push(path);
        });
    }

    render() {
        return(
            <div className="food-form">
                <div className="food-form-element">
                    <label htmlFor="username">Потребителско име</label>
                    <input type="text" className="food-input" id="username" onChange={this.handleUsername} />
                </div>
                <div className="food-form-element">
                    <label htmlFor="password">Парола</label>
                    <input type="password" className="food-input" id="password" onChange={this.handlePassword} />
                </div>
                <button className="food-button" onClick={this.handleLoginUser}>Логни се</button>
            </div>
        )
    }
}

LoginUser.propTypes = {
    route: React.PropTypes.object
};

LoginUser.contextTypes = {
    router: React.PropTypes.object,
    authService: React.PropTypes.object
};

export default LoginUser;