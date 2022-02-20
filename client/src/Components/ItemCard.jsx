import React from 'react';
import '../Styles/item-card.css';
import Heart from './Heart';
const ItemCard = (props) => {
    return ( 
        <div className="item-card">
            <div className="item-img">
                <Heart/>
                <img src={props.img} alt="" />
            </div>
            <div className="item-content">
                <p>₹{props.price}</p>
                <p>{props.product_name}</p>
                <p>{props.date_posted}</p>
            </div>
        </div>
     );
}
 
export default ItemCard;