// Navbar.js

import React, { useState } from 'react';

import img from "../Images/logo.png"
import {NavLink} from "react-router-dom"


const Navbar = ({ isLoggedIn, onLogin, onLogout }) => {
 
const links =[
    {
        title: "Home",
        to: "/"
    },
    {
        title: "Products",
        to: "/Products"
    },
    {
        title: "Mens",
        to: "/Mens"
    },
    {
        title: "Womens",
        to: "/Womens"
    }
 

]
// style={({ isActive }) => (isActive ? activeStyle : Style)}
const Style = {
    color: "black"
  };
  const activeStyle = {
    color: "rgb(255,51,102)"
  };

const handleLoginLogout =()=>{

}

  return (
    <div style={{display: "flex", justifyContent: "space-between", alignItems: "center", padding:"20px", backgroundColor:"#f5f5f5"}}>
      <div style={{height: "50px"}}>
        <img src={img} alt="Logo" width="70px" height="90px"  />
      </div>
      <ul style={{display: "flex", justifyContent:"space-evenly", gap:"20px"}}>
    {
        links.map((link)=>{
            return (
                <li> <NavLink
                style={({ isActive }) => (isActive ? activeStyle : Style)}
                key={link.title}
                to={link.to}
              >
                {link.title}
              </NavLink></li>
            )
        })
    }
      </ul>
      <div>
        <button onClick={handleLoginLogout} style={{padding: "8px 16px", backgroundColor:"#ff3366", color:" #ffffff",border:"none", borderRadius:"4px", cursor:"pointer"}}  >
        <NavLink
               style={{color:  "#ffffff"}}
                key="LoginPage"
                to="/LoginPage"
              >
              Login
              </NavLink>
        </button>
      </div>
      <br />
      <br />
      
    </div>
  );
};

export default Navbar;
