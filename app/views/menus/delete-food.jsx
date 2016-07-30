'use strict';

import React from 'react';
import $ from 'jquery';

class DeleteFood extends React.Component {
    constructor(props, context) {
        super(props, context);
        this.state = {name: '', content: '', price:0.00, isCooked: false, weight:0.00};
        this.getFood = this.getFood.bind(this);
        this.deleteFood = this.deleteFood.bind(this);
    }

    getFood(foodId) {
        $.ajax({
            method: 'GET',
            url: this.props.route.url + '/' + foodId,
            dataType: 'json',
            cache: false
        }).done((data) => {
            this.setState({ name: data.name, content: data.content, price:data.price, isCooked: data.isCooked, weight:data.weight });
        }).fail((xhr, status, err) => {
            console.error(this.props.route.url, status, err.toString());
        });
    }

    deleteFood() {
        let deleteFood = {
            id:this.props.params.foodId,
            name: this.state.name.trim(),
            content: this.state.content.trim(),
            price: parseFloat(this.state.price),
            weight: parseFloat(this.state.weight)
        };

        $.ajax({
            method: 'DELETE',
            url: this.props.route.url,
            dataType: 'json',
            data: deleteFood
        }).done(() => {
            this.context.router.push('/mastermenu');
        }).fail((xhr, status, err) => {
            console.error(this.props.route.url, status, err.toString());
        });
    }
    componentDidMount() {
        this.getFood(this.props.params.foodId);
    }

    render() {
        return(
            <div className="food-form">
                
                <div className="delete-form">Наистина ли желаете да изтриете ястие: {this.state.name}</div>
                <button className="food-button" onClick={this.deleteFood}>Изтрий</button>
            </div>
        )
    }
}

DeleteFood.propTypes = {
    route: React.PropTypes.object,
    params: React.PropTypes.object
};

DeleteFood.contextTypes = {
    router: React.PropTypes.object
};

export default DeleteFood;