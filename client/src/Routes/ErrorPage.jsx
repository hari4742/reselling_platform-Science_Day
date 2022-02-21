import React from 'react';
import { Link } from 'react-router-dom';
import '../Styles/error-page.css';
const ErrorPage = () => {
    return ( 
        <div className="error-page">
            <p>Error: 404</p>
            <p>It Seem You lost the path</p>
            <p><Link to='/'>Click here</Link> to get back to home page</p>
        </div>
     );
}
 
export default ErrorPage;