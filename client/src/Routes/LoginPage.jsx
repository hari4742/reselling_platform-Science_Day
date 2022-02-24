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
    const {isLogged,setLogged,setUser,setWishList} = useContext(AuthContext);
    const navigate = useNavigate();
    const [isPassVisible,setVisibility] = useState(false);
    // Redirects to home if a user tries to go to login  page with out logout
    useEffect(()=>{
        if(isLogged)navigate('/');
    });
    const fetchWishlist = async(user_id)=>{
        const res = await backend.get(`/user/${user_id}/wish_list`);
        // console.log(res);
        setWishList(res.data.data);
    }
    const fetchUser = async()=>{
        let token = localStorage.getItem("token");
        // console.log(token);
        if(token){
            const response = await backend.post("/auth/verify",{'token':token});
            if(response.data.status === "success"){
                setLogged(true);
                const userInfo = await backend.get(`/user/${response.data.user_id}/details`);
                if(userInfo.data.status === "success"){
                    setUser(userInfo.data.data[0]);
                    fetchWishlist(userInfo.data.data[0].user_id);
                    // console.log(userInfo.data.data[0]);
                }else{
                    alert(userInfo.data.msg)
                }
                // alert(response.data.user_id);
            }else{
                setLogged(false);
                alert(response.data.msg);
            }
        }else{
            setLogged(false);
        }
    }
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
                fetchUser();
                navigate('/');
            }else{
                swal(response.data.msg,'','error');
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