import React, { useContext } from "react";
import { AppContext } from "../Context/AppContext";
import { ThemeContext } from "../Context/ThemeContext"
let Navbar= ()=>{
 const {isAuth, login, logOut} = useContext(AppContext)
 const {theme, isLight, toggleTheme} = useContext(ThemeContext)

    return (
        <div style={{display:"flex" , justifyContent:"space-between", backgroundColor:"teal" , padding:"30px", fontSize:"20px"}}>
        <div >NAVBAR</div>
        <div style={{display:"flex" , justifyContent:"space-between", gap:"20px"}}>
        <a href="services.html">Services</a>
        <a href="projects.html">Projects</a>
        <a href="about.html">About</a>
        </div>
        <div><button onClick={()=> {if (isAuth) logOut(); else login("V","J")}} style={{padding:"10px", borderRadius:"20px" , backgroundColor: "yellow" }}>{isAuth ? "Login" : "LogOut"}</button></div>
        <div><button onClick={toggleTheme} style={{padding:"10px", borderRadius:"20px" , backgroundColor: "yellow" }}>
            
       {isLight ? 'dark' : 'light'}
            </button></div>
    </div>
    )
    
}

export default Navbar;