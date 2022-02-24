import React, { useContext } from 'react';
import { AuthContext } from '../context/AuthContext';
import '../Styles/profile-section.css';
import UpdateInfo from '../Components/UpdateInfo';
import ProfileNav from '../Components/ProfileNav';
const ProfileSection = () => {
    const {user,setLogged,setUser} = useContext(AuthContext);
 

    return ( 
        <div className="profile-page">
                        <div className="profile-content">
                           <ProfileNav/>
                        </div>
            </div>
     );
}
 
export default ProfileSection;