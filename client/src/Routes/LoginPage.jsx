import React from 'react';
import { Link } from 'react-router-dom';
import Logo from '../Components/Logo';
import '../Styles/login-page.css'
const LoginPage = () => {
    return ( 
        <div className="login-page">
            <div className="bg-logo">    
            </div>
            <div className="login">
                <Logo/>
                <div className="intro">
                    <p>Welcome Back!</p>
                    <p>Login to Your Account</p>
                </div>
                <form >
                    <input type="email" name="email" id="email" placeholder='E - mail' />
                    <input type="password" name="password" id="password" placeholder='Password'/>
                </form>
                <p className='login-btn'>Login</p>
                <div className="info">
                    <p>Don't have an accout? <Link to='/signup'>Sign Up Here</Link></p>
                    <p><Link to='/' >Forgot password?Click here</Link></p>
                </div>
            </div>
        </div>
     );
}
 
export default LoginPage;