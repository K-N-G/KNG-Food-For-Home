'use strict';

import React  from "react";
import DailyFood from "./daily-food";

const DailyMenuList = (props) =>{

    let foods = props.data.map(
        (food) => {
            return (
                <DailyFood
                    name={food.name}
                    content={food.content}
                    price={food.price}
                    isCooked={food.isCooked}
                    weight={food.weight}
                    commentId={food.id}
                    key={food.id}>
                </DailyFood>
            );
        });
    return (
        <div className="commentList">
            {foods}
        </div>
    );

};

DailyMenuList.propTypes = {
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

export default DailyMenuList;