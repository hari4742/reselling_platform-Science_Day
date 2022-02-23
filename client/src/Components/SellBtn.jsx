import React, { useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import { AuthContext } from '../context/AuthContext';
import '../Styles/sell-btn.css'
const SellBtn = () => {
    const{user} = useContext(AuthContext);
    const navigate = useNavigate();
    const handleClick = ()=>{
        navigate(`/user/${user.user_id}/add/product/`);
    }
    return ( 
        <div className="sell-btn" onClick={handleClick}>
            + Sell 
        </div>
     );
}
 
export default SellBtn;