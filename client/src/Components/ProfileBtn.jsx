import React from 'react';
import { useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import { AuthContext } from '../context/AuthContext';
import '../Styles/profile-btn.css';
const ProfileBtn = () => {
    const {user} = useContext(AuthContext);
    const navigate = useNavigate();
    const handleClick = ()=>{
        navigate(`/profile/${user.user_id}/${user.first_name+user.last_name}`);
    }
    return ( 
        <div className="profile-btn" onClick={handleClick}>
            <img src={'http://localhost:5000'+user.propic}/>
            <p>{user.first_name}</p>
        </div>
     );
}
 
export default ProfileBtn;