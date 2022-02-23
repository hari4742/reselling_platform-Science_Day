import React from 'react';
import { useNavigate } from 'react-router-dom';
import '../Styles/item-card.css';
import Heart from './Heart';
const ItemCard = (props) => {
    const navigate = useNavigate();
    const handleClick = ()=>{
        navigate(`/product/${props.prod.prod_id}/details/${props.prod.product_name}`);
    }
    return ( 
        <div className="item-card" onClick={handleClick}>
            <div className="item-img">
                <Heart/>
                <img src={props.img} alt="product_img" />
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