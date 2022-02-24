import React, { useContext, useEffect, useState } from 'react';
import { Link,useNavigate } from 'react-router-dom';
import Logo from '../Components/Logo';
import '../Styles/signup-page.css';
import signup_img from '../Images/cuh_logo.png';
import { FaEye ,FaEyeSlash} from 'react-icons/fa';
import backend from '../backend';
import { AuthContext } from '../context/AuthContext';
const SignUpPage = () => {
    const{isLogged,setLogged,setUser} = useContext(AuthContext);
    const navigate = useNavigate();
    const [isPassVisible,setVisibility] = useState(false);
    const [first_name,setFname] = useState("");
    const [last_name,setLname] = useState("");
    const [email,setEmail] = useState("");
    const [password,setPassword] = useState("");
    const [pass2,setPass2] = useState("");
    const [mobile,setMobile] = useState("");
    // Redirects to home if a user tries to go to singUP page with out logout
    useEffect(()=>{
        if(isLogged)navigate('/');
    });
    const checkPassword = (e)=>{
        if  (password !== null && password === e.target.value){
            e.target.style.borderBottom = "4px solid rgb(63, 240, 157)";
        }else{
            e.target.style.borderBottom = "4px solid red";
        }
    }
    const handleViewPassword=()=>{
        let password2 = document.getElementById("password_retype");
        setVisibility(isPassVisible?false:true);
        if (password2.type === 'password'){
            password2.type = 'text';
        }else{
            password2.type = 'password';
        }
        
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
    const handleSignUP = async ()=>{
        let f_name = document.getElementById("first_name").value;
        let l_name = document.getElementById("last_name").value;
        let e_mail = document.getElementById("e_mail").value;
        let pass1 = document.getElementById("password").value;
        let pass2 = document.getElementById("password_retype").value;
        let department = document.getElementById("department").value;
        const regex = /[A-Za-z0-9_]+@\w+\.[a-z]+/;
        if(f_name === '' || l_name === '' || e_mail === '' || pass1 === '' || pass2==='' || mobile === '' || department === ''){
            alert("Input fields can't be empty.");
            return false;
        }else if(pass1 !== pass2){
            alert("Passwords didn't match. Please Enter same password in both fields.");
            return false;
        }else if(!(regex.test(e_mail))){
            alert("Please Enter a valid mail.");
            return false;
        }else{
            let formdata = new FormData();
            formdata.set('first_name',first_name);
            formdata.set('last_name',last_name);
            formdata.set('email',email);
            formdata.set('password',password);
            formdata.set('mobile',mobile);
            formdata.set('department',department);
            formdata.set('propic',document.getElementById('propic').files[0]);
            const response = await backend.post("/auth/signup",formdata,{
                headers: {
                  'Content-Type': 'multipart/form-data'
                }
              });
            if(response.data.status === 'success'){
                localStorage.setItem("token",response.data.token);
                setLogged(true);
                fetchUser();
                navigate("/");
            }else{  
                alert(response.data.msg);
            }
        }
    }
    return ( 
        <div className="signup-page-container">
        <div className="signup-page">
            <div className="img-box">
                <img src={signup_img} alt="women_signing_up" />
            </div>
            <div className="signup-form">
                <form name="signUpForm" onSubmit={(e)=>{e.preventDefault();}} autoComplete="on">
                    <p id="welcome-signup">Welcome !</p>
                    <Logo/>
                    <h2>Create New Account</h2>
                    <div className="full-name">
                        <input value={first_name} onChange={(e)=>{setFname(e.target.value)}} type="text" name="first_name" id="first_name" placeholder="First Name (*)" required/>
                        <input value={last_name} onChange={(e)=>{setLname(e.target.value)}} type="text" name="last_name" id="last_name" placeholder="Last Name (*)" required/>
                    </div>
                    <input value={email} onChange={(e)=>{setEmail(e.target.value.toLocaleLowerCase())}} type="email" name="email" id="e_mail" placeholder="E-mail (*)" required/>
                    <input type="file" name="propic" id="propic" accept="image/png, image/jpeg, image/jpg" placeholder='Profile Pic'  />
                    <div className="mobile-dept">
                        <input type="tel" value={mobile} onChange={(e)=>{setMobile(e.target.value)}} name="mobile" id="mobile" placeholder='Phone Number (*)' required/>
                        <select name="department" id="department" required>
                            <option value="Department" disabled>Select Department (*)</option>
                            <option value="CSE">CSE</option>
                            <option value="PPT">PPT</option>
                            <option value="EE">EE</option>
                            <option value="Civil">Civil</option>
                            <option value="Bio Tech">Bio Tech</option>
                            <option value="Geography">Geography</option>
                            <option value="MSC">MSC</option>
                            <option value="BSC">BSC</option>
                            <option value="BA">BA</option>
                            <option value="MA">MA</option>
                            <option value="Law">Law</option>
                            <option value="Yoga">Yoga</option>
                            <option value="Biology">Biology</option>
                            <option value="Statistics">Statistics</option>
                            <option value="Tourism">Tourism</option>
                        </select>
                    </div>
                    <div className="both-passwords">
                        <input value={password} onChange={(e)=>{setPassword(e.target.value)}} type="password" name="password" id="password" placeholder="Password (*)" />
                        <div className="retype-pass">
                            <input value={pass2} onChange={(e)=>{setPass2(e.target.value);checkPassword(e);}}  type="password" name="password_retype" id="password_retype" placeholder="Re-enter Password" />
                            <i onClick={handleViewPassword} >{isPassVisible?<FaEyeSlash/>:<FaEye/>}</i>
                        </div>
                    </div>
                    <input type="submit" value="Sign Up" onClick={handleSignUP} />
                    <p> Already a user? <Link to="/login">Log in Instead!</Link></p>
                </form>
            </div>
        </div>
    </div>
     );
}
 
export default SignUpPage;