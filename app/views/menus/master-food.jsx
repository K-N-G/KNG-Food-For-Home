'use strict';

import React  from 'react';


export default class MasterFood extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {

        return (

            <div className="food">
                <h2>{this.props.name}</h2>
                <div>Съдържание {this.props.content}</div>
                <div>Грамаж: {this.props.weight}гр.</div>
                <div>Цена: {this.props.price}лв.</div>
            </div>
        );

    }
}

MasterFood.propTypes = {
    id: React.PropTypes.number,
    name: React.PropTypes.string,
    content: React.PropTypes.string,
    price: React.PropTypes.number,
    isCooked: React.PropTypes.bool,
    weight: React.PropTypes.number
};