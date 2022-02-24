import React, { createContext, useState } from 'react';

export const AuthContext = createContext();

const  AuthcontextProvider = (props)=>{
    const [isLogged,setLogged] = useState(false);
    const [user,setUser] = useState({});
    const [wishList, setWishList] = useState([])
    return(
        <AuthContext.Provider value={{isLogged,setLogged,user,setUser,wishList,setWishList}}>
                {props.children}
        </AuthContext.Provider>
    );
}
export default AuthcontextProvider;