'use strict';

import React  from 'react';


export default class Food extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div className="food">
                <h2 className="foodName">
                    {this.props.name}
                </h2>
            </div>
        );
    }
}

Food.propTypes = {
    name: React.PropTypes.string.isRequired,
    children: React.PropTypes.node.isRequired,
    myTitle: React.PropTypes.string,
    commentId: React.PropTypes.string.isRequired
};