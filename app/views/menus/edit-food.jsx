'use strict';

import React from 'react';
import $ from 'jquery';

class EditFood extends React.Component {
    constructor(props, context) {
        super(props, context);
        this.state = {name: '', content: '', price:0.00, isCooked: false, weight:0.00};
        this.handleFoodName = this.handleFoodName.bind(this);
        this.handleFoodContent = this.handleFoodContent.bind(this);
        this.handleFoodPrice = this.handleFoodPrice.bind(this);
        this.handleFoodWeight = this.handleFoodWeight.bind(this);
        this.getFood = this.getFood.bind(this);
        this.editFood = this.editFood.bind(this);
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

    handleFoodName(event) {
        this.setState({name: event.target.value});
    }

    handleFoodContent(event) {
        this.setState({content: event.target.value});
    }

    handleFoodPrice(event) {
        this.setState({price: event.target.value});
    }

    handleFoodWeight(event) {
        this.setState({weight: event.target.value});
    }

    editFood() {
        let editFood = {
            id:this.props.params.foodId,
            name: this.state.name.trim(),
            content: this.state.content.trim(),
            price: parseFloat(this.state.price),
            weight: parseFloat(this.state.weight)
        };

        $.ajax({
            method: 'PUT',
            url: this.props.route.url,
            dataType: 'json',
            data: editFood
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
                <div className="food-form-element">
                    <label htmlFor="name">Наименование</label>
                    <input type="text" className="food-input" id="name" value={this.state.name} onChange={this.handleFoodName} />
                </div>
                <div className="food-form-element">
                    <label htmlFor="content">Съдържание</label>
                    <textarea type="text" className="food-input" id="content" value={this.state.content} onChange={this.handleFoodContent} />
                </div>
                <div className="food-form-element">
                    <label htmlFor="price">Цена</label>
                    <input type="text" className="food-input" id="price" value={this.state.price} onChange={this.handleFoodPrice} />
                </div>
                <div className="food-form-element">
                    <label htmlFor="weight">Тегло</label>
                    <input type="text" className="food-input" id="weight" value={this.state.weight} onChange={this.handleFoodWeight} />
                </div>
                <button className="food-button" onClick={this.editFood}>Редактирай</button>
            </div>
        )
    }
}

EditFood.propTypes = {
    route: React.PropTypes.object,
    params: React.PropTypes.object
};

EditFood.contextTypes = {
    router: React.PropTypes.object
}

export default EditFood;