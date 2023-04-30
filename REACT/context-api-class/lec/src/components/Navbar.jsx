import React from 'react'
import Wishlist from './Wishlist'
import { useContext } from 'react'
import { AuthContext } from '../context/AuthContext'
import { Cartcontext } from '../context/CartContext'
import { ThemeContext } from '../context/ThemeContext'



const Navbar = () => {
    const { isAuthorized, login, logout}= useContext(AuthContext)
   const {buy}= useContext(Cartcontext)
   const {isLight, toggleTheme}= useContext(ThemeContext)
   
    return (
    <>
    Navbar
    <button 
    onClick={()=> {
        if(isAuthorized) logout()
        else login("R","Z");
    }}
    >
        
        {isAuthorized? "Logout": "Login"}

    </button>
    <button onClick={toggleTheme}>{`Make${isLight ? "Dark": "Light"}`}</button>
          <Wishlist/>
    </>


  
    
  )
}

export default Navbar