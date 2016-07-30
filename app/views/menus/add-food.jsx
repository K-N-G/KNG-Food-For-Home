'use strict';

import React from 'react';
import $ from 'jquery';

class AddFood extends React.Component {
    constructor(props, context) {
        super(props, context);
        this.state = {name: '', content: '', price:0.00, isCooked: false, weight:0.00};
        this.handleFoodName = this.handleFoodName.bind(this);
        this.handleFoodContent = this.handleFoodContent.bind(this);
        this.handleFoodPrice = this.handleFoodPrice.bind(this);
        this.handleFoodWeight = this.handleFoodWeight.bind(this);
        this.addFood = this.addFood.bind(this);
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

    addFood() {
        let procedure = {
            name: this.state.name.trim(),
            content: this.state.content.trim(),
            price: parseFloat(this.state.price.trim()),
            weight: parseFloat(this.state.weight.trim())
        };

        $.ajax({
            method: 'POST',
            url: this.props.route.url,
            dataType: 'json',
            data: procedure
        }).done(() => {
            this.context.router.push('/mastermenu');
        }).fail((xhr, status, err) => {
            console.error(this.props.route.url, status, err.toString());
        });
    }

    render() {
        return(
            <div className="food-form">
                <div className="food-form-element">
                    <label htmlFor="name">Име на процедурата</label>
                    <input type="text" className="food-input" id="name" onChange={this.handleFoodName} />
                </div>
                <div className="food-form-element">
                    <label htmlFor="content">Описание</label>
                    <textarea type="text" className="food-input"  id="content" onChange={this.handleFoodContent} />
                </div>
                <div className="food-form-element">
                    <label htmlFor="price">Описание</label>
                    <input type="text" className="food-input" id="price" onChange={this.handleFoodPrice} />
                </div>
                <div className="food-form-element">
                    <label htmlFor="weight">Описание</label>
                    <input type="text" className="food-input" id="weight" onChange={this.handleFoodWeight} />
                </div>
                <button className="food-button" onClick={this.addFood}>Добави</button>
            </div>
        )
    }
}

AddFood.propTypes = {
    route: React.PropTypes.object
};

AddFood.contextTypes = {
    router: React.PropTypes.object
}
    
export default AddFood;