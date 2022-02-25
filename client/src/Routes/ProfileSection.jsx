import React, { useContext } from 'react';
import { AuthContext } from '../context/AuthContext';
import '../Styles/profile-section.css';
import ProfileNav from '../Components/ProfileNav';
const ProfileSection = () => {
 
    return ( 
        <div className="profile-page">
                        <div className="profile-content">
                           <ProfileNav/>
                        </div>
            </div>
     );
}
 
export default ProfileSection;