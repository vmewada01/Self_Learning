import React, { createContext, useState } from "react";
import { useNavigate } from "react-router-dom";

export const AuthContext = createContext();

export  const AuthProvider = ({children})=>{
const navigate = useNavigate();

 const [isAuth, setAuth]= useState(false);

 const login =()=>{
    setAuth(true)
    navigate("/feeds")
 }
 const logout=()=>{
    setAuth(false)
    navigate("/")
 }
return (
<AuthContext.Provider value={{login, logout,isAuth}} >
    {children}
</AuthContext.Provider>

)
}