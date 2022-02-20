import React from 'react';
import '../Styles/heart.css';
import { useState } from 'react';
import { AiOutlineHeart,AiFillHeart } from 'react-icons/ai';
const Heart = () => {
    const [isFilled,changeFill] = useState(false);
    const handleClick = ()=>{
        changeFill(isFilled?false:true)
    }
    return ( 
        <div className="heart" onClick={handleClick}>
            {isFilled?<AiFillHeart className='icon'/>:<AiOutlineHeart className='icon'/>}
        </div>
     );
}
 
export default Heart;