import React from 'react';
import { Link } from 'react-router-dom';
import Logo from '../Components/Logo';
import '../Styles/login-page.css';
import login_img from "../Images/cuh_logo.png";
import { FaEye ,FaEyeSlash} from 'react-icons/fa';
import { useState } from 'react';

const LoginPage = () => {
    const [isPassVisible,setVisibility] = useState(false);
    const handleLogIn = async()=>{
        let e_mail = document.getElementById("e_mail").value;
        let password = document.getElementById("password").value;
        const regex = /[A-Za-z0-9_]+@\w+\.[a-z]+/;
        if(e_mail === '' || password === ''){
            alert("Input fields can't be empty.");
            return false;
        }else if(!(regex.test(e_mail))){
            alert("Please Enter a valid mail.");
            return false;
        }else{
            // const response = await backend.post("/auth/login",{e_mail,password});
            // if(response.data.status === "success"){
            //     localStorage.setItem("token",response.data.token);
            //     setLogged(true);
            //     history.push("/");
            // }else{
            //     alert(response.data.msg);
            // }
        }
    }
    const handleViewPassword=()=>{
        let password = document.getElementById("password");
        setVisibility(isPassVisible?false:true);
        if (password.type === 'password'){
            password.type = 'text';
        }else{
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
                        <Logo/>
                        <h2>Login to your account</h2>
                        <input type="email" name="e_mail" id="e_mail" placeholder="E-Mail" />
                        <div className="login-password">
                            <input type="password" name="password" id="password" placeholder="Password" />
                            <i onClick={handleViewPassword} className="input-pass">{isPassVisible?<FaEyeSlash/>:<FaEye/>}</i>
                        </div>
                        <input type="submit" onClick={handleLogIn} value="Log In"/>
                        <p className='info'>New Here? <Link to="/signup">sign-up instead!</Link></p>
                        <p className='info'>Forgot Password?</p>
                    </form>
                </div>
            </div>
        </div>
     );
}
 
export default LoginPage;