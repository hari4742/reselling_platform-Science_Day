import React, { useContext, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import Logo from '../Components/Logo';
import '../Styles/login-page.css';
import login_img from "../Images/cuh_logo.png";
import { FaEye ,FaEyeSlash} from 'react-icons/fa';
import { useState } from 'react';
import swal from 'sweetalert';
import backend from '../backend';
import { AuthContext } from '../context/AuthContext';

const LoginPage = () => {
    const {isLogged,setLogged} = useContext(AuthContext);
    const navigate = useNavigate();
    const [isPassVisible,setVisibility] = useState(false);
    // Redirects to home if a user tries to go to login  page with out logout
    useEffect(()=>{
        if(isLogged)navigate('/');
    });
    const handleLogIn = async()=>{
        let email = document.getElementById("e_mail").value;
        let password = document.getElementById("password").value;
        const regex = /[A-Za-z0-9_]+@\w+\.[a-z]+/;
        if(email === '' || password === ''){
            swal("Input fields can't be empty.",'info');
            return false;
        }else if(!(regex.test(email))){
            swal("Please Enter a valid mail.",'info');
            return false;
        }else{
            let formdata = new FormData();
            formdata.set('email',email);
            formdata.set('password',password);
            const response = await backend.post("/auth/login",formdata,{
                headers: {
                    'Content-Type': 'multipart/form-data'
                  }
            });
            if(response.data.status === "success"){
                localStorage.setItem("token",response.data.token);
                setLogged(true);
                navigate('/');
            }else{
                swal(response.data.msg,'error');
            }
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
                    <form onSubmit={(e)=>{e.preventDefault();}} autoComplete="on">
                        <p id="welcome">Welcome Back!</p>
                        <Logo/>
                        <h2>Login to your account</h2>
                        <input type="email" name="email" id="e_mail" placeholder="E-Mail" />
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