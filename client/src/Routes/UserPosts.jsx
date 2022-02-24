import React, { useContext, useEffect, useState } from 'react';
import backend from '../backend';
import ItemCard from '../Components/ItemCard';
import ProfileNav from '../Components/ProfileNav';
import { AuthContext } from '../context/AuthContext';
import '../Styles/user-posts.css';
import {AiFillDelete} from 'react-icons/ai';
const UserPosts = () => {
    const {user} = useContext(AuthContext);
    const [posts,setPosts] = useState(null);
    const fetchUserPosts = async()=>{
        const res = await backend.get(`/products/user/${user.user_id}`);
        setPosts(res.data.data);
    }
    const handleDelPost = async(prod_id)=>{
        await backend.delete(`/product/${prod_id}/delete`);
        fetchUserPosts();
    }
    useEffect(()=>{fetchUserPosts()},[])
    return ( 
        <div className="user-posts">
            <ProfileNav/>
            <div className="posts">
                <h2>Your Posts</h2>
                {posts?posts.map((post,idx)=>{
                    return <div key={idx} className="pro-post">
                        <AiFillDelete onClick={()=>{
                            handleDelPost(post.prod_id)
                            }}  className='icon'/>
                        <ItemCard prod={post}  />
                    </div>
                }):<p>No Posts Yet</p>}
            </div>
        </div>
     );
}
 
export default UserPosts;