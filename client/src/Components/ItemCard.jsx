import React from 'react';
import { useNavigate } from 'react-router-dom';
import '../Styles/item-card.css';
// import Heart from './Heart';
import noProdImg from '../Images/no-prod-img.jpg';
const ItemCard = (props) => {
    const navigate = useNavigate();
    const handleClick = ()=>{
        // console.log(props.prod);
        navigate(`/product/${props.prod.prod_id}/details/${props.prod.product_name}`);
    }
    return ( 
        <div className="item-card" onClick={handleClick}>
            <div className="item-img">
                {/* <Heart/> */}
                {props.prod.display_img?
                <img src={'http://localhost:5000'+props.prod.display_img} alt="product_img" />
                :<img src={noProdImg}/>}
            </div>
            <div className="item-content">
                <p>₹{props.prod.price}</p>
                <p>{props.prod.product_name}</p>
                <p>{props.prod.posted_date}</p>
            </div>
        </div>
     );
}
 
export default ItemCard;