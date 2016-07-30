'use strict';

import React from 'react';
import $ from 'jquery';
import DailyMenuList from './daily-menu-list';

class DailyMenu extends React.Component {
    constructor(props, context) {
        super(props, context);
        this.state = { data: [] };
        this.getFoods = this.getFoods.bind(this);
    }

    getFoods() {
        $.ajax({
            method: 'GET',
            url: this.props.route.url,
            dataType: 'json',
            cache: false
        }).done((data) => {
            this.setState({ data: data });
        }).fail((xhr, status, err) => {
            console.error(this.props.route.url, status, err.toString());
        });
    }

    componentDidMount() {
        this.getFoods();
    }

    render() {
        return(
            <DailyMenuList data={this.state.data} myTitle='Comment: '/>

        );
    }
}

DailyMenu.propTypes = {
    route: React.PropTypes.object,
    params: React.PropTypes.object
};

DailyMenu.contextTypes = {
    router: React.PropTypes.object
};

export default DailyMenu;