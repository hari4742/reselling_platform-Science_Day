import React, { useContext, useState } from 'react';
import backend from '../backend';
import { AuthContext } from '../context/AuthContext';
import { FaEye ,FaEyeSlash} from 'react-icons/fa';

import ProfileNav from './ProfileNav';
const UpdateInfo = (props) => {
    const {user} = useContext(AuthContext);
    const [f_name,setFname] = useState(user.first_name);
    const [l_name,setLname] = useState(user.last_name);
    const [e_mail,setEmail] = useState(user.email);
    const [pass1,setPass1] = useState();
    const [pass2,setPass2] = useState();
    const [isPassVisible,setVisibility] = useState(false);

    const handleCancel = ()=>{
        setFname(user.first_name);
        setLname(user.last_name);
        setEmail(user.email);
    }
    const handleUpdateDetails = async()=>{
        let f_name = document.getElementById("f_name_U").value;
        let l_name = document.getElementById("l_name_U").value;
        let e_mail = document.getElementById("e_mail_U").value;
        const regex = /[A-Za-z0-9_.]+@\w+\.[a-z]+/;
        if (f_name === '' || l_name === '' || e_mail === ''){
            alert("Input fields can't be empty.");
            return false;
        }else if(!(regex.test(e_mail))){
            alert("Please Enter a valid mail.");
            return false;
        }else{
            // const response = await backend.put('/auth/user/profile/details',{f_name,l_name,e_mail,user_id:user.user_id})
            // if(response.data.status === 'success'){
            //     setUser(response.data.data);
            //     alert("Details Updated Successfully!");

            // }else{
            //     alert(response.data.msg);
            // }
            return true;
        }
        
    }
    const checkPassword = (e)=>{
        if (pass1 === e.target.value){
            document.querySelector('.pass2').style.border = "3px solid #20bf6b";
        }else{
            document.querySelector('.pass2').style.border = "3px solid #eb3b5a";
        }
    }
    const handleUpdatePassword = async()=>{
        let password1 = document.getElementById("password1").value;
        let password2 = document.getElementById("password2").value;
        if (password1 === '' || password2 === ''){
            alert("Password fields can't be empty");
            return false;
        }else if( password1 !== password2){
            alert("Password didn't match. Please enter same password in both fields.")
            return false;
        }else{
            const response = await backend.put("/auth/user/profile/password",{user_id:user.user_id,password:password1});
            if(response){
                alert("Password is Successfully Updated!");
                setPass1('');
                setPass2('');
            }
            return true;
        }
    }
    const handleCancelPassword = ()=>{
        setPass1('');
        setPass2("");
    }
    const handleViewPassword=()=>{
        let password2 = document.getElementById("password2");
        setVisibility(isPassVisible?false:true);

        if (password2.type === 'password'){
            password2.type = 'text';
        }else{
            password2.type = 'password';
        }
        
    }
    return ( 
        <div className='user-update'>
        <ProfileNav/>
        <div className="update-info">
            <h2>Update Your Details</h2>
            <div className="update-form">
                <form onSubmit={(e)=>{e.preventDefault();}} >
                    <div className="names">
                        <input value={f_name} onChange={(e)=>{setFname(e.target.value)}} type="text" name="f_name" id="f_name_U" placeholder="First Name" />
                        <input value={l_name} onChange={(e)=>{setLname(e.target.value)}} type="text" name="l_name" id="l_name_U" placeholder="Last Name" />
                    </div>
                    <input value={e_mail} onChange={(e)=>{setEmail(e.target.value)}} type="email" name="e_mail" id="e_mail_U" placeholder="E-Mail" />
                </form>
                <div className="update-btn">
                    <p onClick={handleCancel} id="cancel_btn">Cancel</p>
                    <p onClick={handleUpdateDetails} id="update_btn">Update</p>
                </div>
            </div>
            <div className="change-pass">
                <h2>Change Password</h2>
                <div className="pass-inputs">
                    <input value={pass1} onChange={(e)=>{setPass1(e.target.value)}} type="password" name="password" id="password1" placeholder="Password" />
                    <div className="pass2">
                        <input value={pass2} onChange={(e)=>{setPass2(e.target.value);checkPassword(e)}} type="password" name="password_retype" id="password2" placeholder="Re-type Password" />
                        <i onClick={handleViewPassword} >{isPassVisible?<FaEyeSlash/>:<FaEye/>}</i>
                    </div>
                </div>
                <div className="update-btn">
                    <p id="cancel_btn" onClick={handleCancelPassword}>Cancel</p>
                    <p id="update_btn" onClick={handleUpdatePassword}>Update</p>
                </div>
            </div>
        </div>
        </div>
     );
}
 
export default UpdateInfo;