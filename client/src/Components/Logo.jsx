import React from 'react';
import { Link } from 'react-router-dom';
import '../Styles/logo.css';
const Logo = () => {
    return ( 
        <Link to="/">
            <div className="logo">
                <p>CUH</p>
                <p>OLX</p>
            </div>
        </Link>
     );
}
 
export default Logo;