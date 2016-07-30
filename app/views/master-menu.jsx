'use strict';

import React from 'react';
import $ from 'jquery';
import MasterMenuList from './master-menu-list';

class MasterMenu extends React.Component {
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

    render() {
        return(
            <MasterMenuList data={this.state.data} myTitle='Comment: '/>
            
        );
    }
}

MasterMenu.propTypes = {
    route: React.PropTypes.object,
    params: React.PropTypes.object
};

MasterMenu.contextTypes = {
    router: React.PropTypes.object
};

export default MasterMenu;