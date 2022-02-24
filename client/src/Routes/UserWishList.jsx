import React, { useContext } from 'react';
import ItemCard from '../Components/ItemCard';
import ProfileNav from '../Components/ProfileNav';
import { AuthContext } from '../context/AuthContext';
import '../Styles/user-wish-list.css';
const UserWishList = () => {
    const {wishList} = useContext(AuthContext);
    return ( 
        <div className="user-wish-list">
            <ProfileNav/>
            <div className="wish-list-prods">
            <h2>Wish List</h2>
                {wishList.length!==0?wishList.map((prod,idx)=>{return <ItemCard key={idx} prod={prod}/>}):<p>No items in your wish list</p>}
            </div>
        </div>
     );
}
 
export default UserWishList;