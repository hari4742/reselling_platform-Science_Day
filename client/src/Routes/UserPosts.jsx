import React, { useContext, useEffect, useState } from 'react';
import backend from '../backend';
import ItemCard from '../Components/ItemCard';
import ProfileNav from '../Components/ProfileNav';
import { AuthContext } from '../context/AuthContext';
import '../Styles/user-posts.css';
const UserPosts = () => {
    const {user} = useContext(AuthContext);
    const [posts,setPosts] = useState(null);
    const fetchUserPosts = async()=>{
        const res = await backend.get(`/products/user/${user.user_id}`);
        setPosts(res.data.data);
    }
    useEffect(()=>{fetchUserPosts()},[])
    return ( 
        <div className="user-posts">
            <ProfileNav/>
            <div className="posts">
                {posts?posts.map((post)=>{
                    return <ItemCard prod={post}  />
                }):<p>No Posts Yet</p>}
            </div>
        </div>
     );
}
 
export default UserPosts;