import React from 'react';
import { Link } from 'react-router-dom';
import Logo from '../Components/Logo';
import '../Styles/signup-page.css';
const SignUpPage = () => {
    return ( 
        <div className="signup-page">
            <div className="bg-logo">    
            </div>
            <div className="signup">
                <Logo/>
                <div className="intro">
                    <p>Welcome!</p>
                    <p>Sign Up for an Account</p>
                </div>
                <form >
                    <div className="names">
                        <input type="text" name="first_name" id="first_name" placeholder='First Name'/>
                        <input type="text" name="last_name" id="last_name" placeholder='Last Name' />
                    </div>
                    <input type="email" name="email" id="email" placeholder='E-Mail' />
                    <input type="tel" name="mobile" id="mobile" placeholder='Mobile Number' />
                    <div className="passwords">
                        <input type="password" name="pass1" id="pass1" placeholder='Password'/>
                        <input type="password" name="pass2" id="pass2" placeholder='Re-type Password'/>
                    </div>
                </form>
                <p className='signup-btn'>Sign Up</p>
                <div className="info">
                    <p>Already have an accout? <Link to='/login'>Login Here</Link></p>
                </div>
            </div>
        </div>
     );
}
 
export default SignUpPage;