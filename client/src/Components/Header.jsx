import React from 'react';
import '../Styles/header.css';
import cuh_logo from '../Images/cuh_logo.png';
import { FiSearch } from 'react-icons/fi';
import Logo from './Logo';
import { Link } from 'react-router-dom';

const Header = () => {
    return ( 
        <div className="header">
            <div className="logo-text">
                <img src={cuh_logo} alt="cuh_logo" />
                <Logo/>
            </div>
            <div className="search-bar">
                <input type="search" name="search" id="search" placeholder='Search items...'/>
                <FiSearch className='icon'/>
            </div>
            <div className="login-sign">
                <p><Link to='/login'>Login</Link></p>
                <p><Link to='/signup' style={{color:"white"}}>Sign Up</Link></p>
            </div>
        </div>
     );
}
 
export default Header;