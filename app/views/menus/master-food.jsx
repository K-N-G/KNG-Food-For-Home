'use strict';

import React  from 'react';


class MasterFood extends React.Component {
    constructor(props, context) {
        super(props, context);
        this.handleEditFood = this.handleEditFood.bind(this);
        this.handleDeleteFood = this.handleDeleteFood.bind(this);
    }

    handleEditFood(){
        let path = '/mastermenu/edit/' + this.props.foodId;
        this.context.router.push(path);
    }
    handleDeleteFood() {
        let path = '/mastermenu/delete/' + this.props.foodId;
        this.context.router.push(path);
    }
    render() {

        return (

            <div className="food">
                <h2>{this.props.name}</h2>
                <div>Съдържание {this.props.content}</div>
                <div>Грамаж: {this.props.weight}гр. Цена: {this.props.price}лв.</div>
                <button className="food-button" type="button" onClick={this.handleEditFood}>Редактирай</button>
                <button className="food-button" type="button" onClick={this.handleDeleteFood}>Изтрий</button>
            </div>
        );

    }
}

MasterFood.propTypes = {
    foodId: React.PropTypes.number,
    name: React.PropTypes.string,
    content: React.PropTypes.string,
    price: React.PropTypes.number,
    isCooked: React.PropTypes.bool,
    weight: React.PropTypes.number
};

MasterFood.contextTypes = {
    router:React.PropTypes.object
};

export default MasterFood;