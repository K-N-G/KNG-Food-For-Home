'use strict';

import $ from 'jquery';

class AuthenticationService {
    constructor(base_url) {
        this.url = base_url;
    }

    loginUser(user) {
        let url = this.url + '/Token';
        let userData = {};

        return $.when(
            $.ajax({
                method: 'POST',
                url: url,
                dataType: 'json',
                data: user
            }).then((loggedUser) => {
                userData.isAdmin = loggedUser.isAdmin;
                userData.id = loggedUser.id;
                userData.isChef = loggedUser.isChef;
                sessionStorage.currentUser = JSON.stringify(userData);
            })
        );
    }

    logoutUser() {
        sessionStorage.clear();
    }

    getUser() {
        let userObject = sessionStorage.currentUser;
        if (userObject) {
            return JSON.parse(sessionStorage.currentUser);
        }
    }

    isAuthenticated() {
        return sessionStorage.currentUser !== undefined;
    }

    isAdmin() {
        let currentUser = JSON.parse(sessionStorage.currentUser);
        return currentUser !== undefined && currentUser.isAdmin;
    }

    isChef() {
        let currentUser = this.getUser();
        return currentUser !== undefined && currentUser.isChef;
    }
}

export default AuthenticationService;