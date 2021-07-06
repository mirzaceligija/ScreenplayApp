import React from 'react';

import './ScreenplayCard.css';

const ScreenplayCard = ({screenplay}) => {

    return(
        <div className="Card">
            <h2> Title: {screenplay?.title}</h2>
            <hr/>
            <p> <b>Rate:</b> {screenplay?.rate} </p>
            <p className="Description"> {screenplay?.description}</p>
            <p className="Category">
                <span> {screenplay?.category.name}</span>
            </p>
        </div>
    );
}

export default ScreenplayCard;