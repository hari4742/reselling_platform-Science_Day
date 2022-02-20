import  React from 'react';
import './styles/login_page.css';
import login_img from './Images/login.png';
const LoginPage = () =>{
    
   
    const handleViewPassword=()=>{
        let password = document.getElementById("password");
        let eye = document.querySelector('.input-pass');
        eye.classList.replace('fa-eye-slash','fa-eye')
        if (password.type === 'password'){
            password.type = 'text';
        }else{
            eye.classList.replace('fa-eye','fa-eye-slash');
            password.type = 'password';
        }
        
    }
    return ( 
        <div className="login-page-container">
            <div className="login-page">
                <img src={login_img} alt="person unlocking a lock"/>
                <div className="login-form">
                    <form onSubmit={(e)=>{e.preventDefault();}} autoComplete="off">
                        <p id="welcome">Welcome Back!</p>
                        {/* <Logo/> */}
                        <h2>Login to your account</h2>
                        <input type="email" name="e_mail" id="e_mail" placeholder="E-Mail" />
                        <div className="login-password">
                            <input type="password" name="password" id="password" placeholder="Password" />
                            <i onClick={handleViewPassword} className="fas fa-eye-slash input-pass"></i>
                        </div>
                        <input type="submit"  value="Log In"/>
                        <p id="new-here">New Here? sign-up instead</p>
                    </form>
                </div>
            </div>
        </div>
     );
}
 
export default LoginPage;







