'use strict';

import React  from "react";
import MasterFood from "./master-food";

/**
 * CommentList component
 */

const MasterMenuList = (props) =>{

        //let props = this.props.data;
        //var {data, ...restProps} = props;
        let foods = props.data.map(
            (food) => {
                return (
                    <MasterFood
                        name={food.name}
                        content={food.content}
                        price={food.price}
                        isCooked={food.isCooked}
                        weight={food.weight}
                        commentId={food.id} 
                        key={food.id}>
                    </MasterFood>
                );
            });
        return (
            <div className="commentList">
                {foods}
            </div>
        );

};

MasterMenuList.propTypes = {
    data: React.PropTypes.arrayOf(
        React.PropTypes.shape({
            id: React.PropTypes.number.isRequired,
            name: React.PropTypes.string,
            content: React.PropTypes.string,
            price: React.PropTypes.number,
            isCooked: React.PropTypes.bool,
            weight: React.PropTypes.number
        }))
};

export default MasterMenuList;