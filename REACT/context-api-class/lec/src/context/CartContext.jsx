import React,{createContext, useContext, useState} from "react";
import { AuthContext } from "./AuthContext";

export const Cartcontext = createContext();

export const CartProvider = ({children}) =>{
    const {isAuthorized}= useContext(AuthContext)
    const [count, setcount]= useState(0);
  
    const addToCart =()=>{
        setcount(count +1);
    }
  const buy =()=>{
    if(isAuthorized){
        console.log("can buy")

    }
    else{
        console.log("can't buy without login")
    }
  }
  return (
    <Cartcontext.Provider
    value={{count, addToCart, buy}}
    
    >{children}</Cartcontext.Provider>
  )

}