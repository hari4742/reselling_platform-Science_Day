import React, {  useState } from 'react';
 import  './styles/signup_page.css';
 import signup_img from './Images/login.png';
// import backend from '../backend';
// import Logo from '../components/Logo';
// import { AuthContext } from '../context/AuthenticationContext';
const SingUp = () => {
   
    const [f_name,setFname] = useState("");
    const [l_name,setLname] = useState("");
    const [e_mail,setEmail] = useState("");
    const [password,setPassword] = useState("");
    const [pass2,setPass2] = useState("");
    const handleSignUP =  ()=>{
        let f_name = document.getElementById("first_name").value;
        let l_name = document.getElementById("last_name").value;
        let e_mail = document.getElementById("e_mail").value;
        let pass1 = document.getElementById("password").value;
        let pass2 = document.getElementById("password_retype").value;
        const regex = /[A-Za-z0-9_\.]+@\w+\.[a-z]+/;
        if(f_name === '' || l_name === '' || e_mail === '' || pass1 === '' || pass2===''){
            alert("Input fields can't be empty.");
            return false;
        }else if(pass1 !== pass2){
            alert("Passwords didn't match. Please Enter same password in both fields.");
            return false;
        }else if(!(regex.test(e_mail))){
            alert("Please Enter a valid mail.");
            return false;
        }
            
           
    
    }
    const checkPassword = (e)=>{
        if (password === e.target.value){
            e.target.style.borderBottom = "4px solid rgb(63, 240, 157)";
        }else{
            e.target.style.borderBottom = "4px solid red";
        }
    }
    const handleViewPassword=()=>{
        let password2 = document.getElementById("password_retype");
        let eyeSlash = document.querySelector('.fa-eye-slash');
        if (password2.type === 'password'){
            eyeSlash.classList.replace('fa-eye-slash','fa-eye')
            password2.type = 'text';
        }else{
            let eye = document.querySelector('.fa-eye');
            eye.classList.replace('fa-eye','fa-eye-slash');
            password2.type = 'password';
        }
        
    }
    return ( 
        <div className="signup-page-container">
            <div className="signup-page">
                <div className="img-box">
                    <img src={signup_img} alt="women_signing_up" />
                </div>
                <div className="signup-form">
                    <form name="signUpForm" onSubmit={(e)=>{e.preventDefault();}} autoComplete="off">
                        <p id="welcome-signup">Welcome !</p>
                        <h2>Create New Account</h2>
                        <div className="full-name">
                            <input value={f_name} onChange={(e)=>{setFname(e.target.value)}} type="text" name="first_name" id="first_name" placeholder="First Name" />
                            <input value={l_name} onChange={(e)=>{setLname(e.target.value)}} type="text" name="last_name" id="last_name" placeholder="Last Name" />
                        </div>
                        <input value={e_mail} onChange={(e)=>{setEmail(e.target.value.toLocaleLowerCase())}} type="email" name="e_mail" id="e_mail" placeholder="E-mail" />
                        <input value={password} onChange={(e)=>{setPassword(e.target.value)}} type="password" name="password" id="password" placeholder="Password" />
                        <div className="retype-pass">
                            <input value={pass2} onChange={(e)=>{setPass2(e.target.value);checkPassword(e);}}  type="password" name="password_retype" id="password_retype" placeholder="Re-enter Password" />
                            <i onClick={handleViewPassword} className="fas fa-eye-slash"></i>
                        </div>
                        <input type="submit" value="Sign Up" onClick={handleSignUP} />
                        <p> Already a user? Log in Instead!</p>
                        <p>Forget Password?</p>
                    </form>
                </div>
            </div> 
        </div>
     );
}
 
export default SingUp;