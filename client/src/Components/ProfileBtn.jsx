import React from 'react';
import { useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import { AuthContext } from '../context/AuthContext';
import '../Styles/profile-btn.css';
import {AiFillCaretDown} from 'react-icons/ai';
import noimg from '../Images/user.png';
const ProfileBtn = () => {
    const {user} = useContext(AuthContext);
    const navigate = useNavigate();
    const handleClick = ()=>{
        navigate(`/profile/${user.user_id}/${user.first_name+user.last_name}`);
    }
    return ( 
        <div className="profile-btn" onClick={handleClick}>
            {user.propic?
            <img src={'http://localhost:5000'+user.propic}/>
            :<img src={noimg}/>}
            <p>{user.first_name != undefined?user.first_name.charAt(0).toUpperCase()+user.first_name.slice(1):null }<AiFillCaretDown className='icon'/></p>
        </div>
     );
}
 
export default ProfileBtn;