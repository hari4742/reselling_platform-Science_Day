import React, { useContext, useEffect } from 'react';
import '../Styles/heart.css';
import { useState } from 'react';
import { AiOutlineHeart,AiFillHeart } from 'react-icons/ai';
import { AuthContext } from '../context/AuthContext';
import backend from '../backend';
import swal from 'sweetalert';
const Heart = (props) => {
    const {user,wishList,isLogged} = useContext(AuthContext);
    const [isFilled,changeFill] = useState(false);
    const [wishId,setWishId] = useState(null);
    const addToWishlist = async()=>{
        await backend.post('/user/add/wishlist',{user_id:user.user_id,prod_id:props.prod_id});
    }
    const delFromWishList = async()=>{
        await backend.delete(`/user/${user.user_id}/delete/${wishId}/wishlist`);
    }
    const fetchWishlist = ()=>{
        // const res = await backend.get(`/user/${user.user_id}/wish_list`);
        // let wishList = res.data.data;
        // console.log('Wish list',wishList);
        for(let i=0;i<wishList.length;i++){
            if(wishList[i].prod_id === props.prod_id){
                setWishId(wishList[i].wish_id);
                changeFill(true);
            }
        }
    }
    useEffect(()=>{
        if(isLogged){fetchWishlist();}
    },[])

    const handleClick = ()=>{
        if(isLogged){
            changeFill(isFilled?false:true)
            if(isFilled){
                delFromWishList();
            }else{
                addToWishlist();
            }
        }else{
            swal("Please Log in or Sign Up!",' ','info');
        }
    }
    return ( 
        <div className="heart" onClick={handleClick}>
            {isFilled?<AiFillHeart className='icon'/>:<AiOutlineHeart className='icon'/>}
        </div>
     );
}
 
export default Heart;