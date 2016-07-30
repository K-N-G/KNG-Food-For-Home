'use strict';

import React  from "react";
import Food from "./food";

/**
 * CommentList component
 */

const MasterMenuList = (props) =>{

        //let props = this.props.data;
        //var {data, ...restProps} = props;
        let foods = props.data.map(
            (food) => {
                return (
                    <Food name={food.name} commentId={food.id} key={food.id}>
                        {food.content}
                    </Food>
                );
            });
        return (
            <div className="commentList">
                {foods}
            </div>
        );

}

MasterMenuList.propTypes = {
    data: React.PropTypes.arrayOf(
        React.PropTypes.shape({
            id: React.PropTypes.string.isRequired,
            name: React.PropTypes.string,
            content: React.PropTypes.string
        })),
    myTitle: React.PropTypes.string
};

export default MasterMenuList;