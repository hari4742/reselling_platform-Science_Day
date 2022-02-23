import React, { useContext, useEffect } from 'react';
import '../Styles/header.css';
import cuh_logo from '../Images/cuh_logo.png';
import Logo from './Logo';
import { Link,NavLink } from 'react-router-dom';
import { AuthContext } from '../context/AuthContext';
import SellBtn from './SellBtn';
import backend from '../backend';

const Header = () => {
    const {isLogged,setLogged,setUser} = useContext(AuthContext);
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
    useEffect(()=>{
        fetchUser();
    },[]);
    return ( 
        <div className="header">
            <div className="logo-text">
                <img src={cuh_logo} alt="cuh_logo" />
                <Logo/>
            </div>
            <div className="nav">
                <NavLink to='/'>Home</NavLink>
                <NavLink to='/products'>Products</NavLink>
                <NavLink to='/about'>About Us</NavLink>
            </div>
            {isLogged? <SellBtn/>:<div className="login-sign">
                <p><Link to='/login'>Login</Link></p>
                <p><Link to='/signup' style={{color:"white"}}>Sign Up</Link></p>
            </div>}
               
            
        </div>
     );
}
 
export default Header;