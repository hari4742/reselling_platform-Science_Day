import React from 'react';
import { Link } from 'react-router-dom';
import '../Styles/logo.css';
const Logo = () => {
    return ( 
        <Link to="/">
            <div className="logo">
                <p>Reselling</p>
                <p>Platform</p>
            </div>
        </Link>
     );
}
 
export default Logo;