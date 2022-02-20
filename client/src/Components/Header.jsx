import React from 'react';
import '../Styles/header.css';
import cuh_logo from '../Images/cuh_logo.png';
import { FiSearch } from 'react-icons/fi';

const Header = () => {
    return ( 
        <div className="header">
            <div className="logo-text">
                <img src={cuh_logo} alt="cuh_logo" />
                <div className="text">
                    <p>Reselling</p>
                    <p>Platform</p>
                </div>
            </div>
            <div className="search-bar">
                <input type="search" name="search" id="search" placeholder='Search items...'/>
                <FiSearch className='icon'/>
            </div>
            <div className="login-sign">
                <p>Login</p>
                <p>Sign Up</p>
            </div>
        </div>
     );
}
 
export default Header;