import React, { createContext, useState } from "react";

export const AppCont = createContext()


export default function AppContextProvider({children}){

  const [state, setState]= useState({
    isAuth: false,
    token: "ABCD"
  })

  const handleLogin = (token)=>{
   setState({
    ...state,
    token: token
   })
  }

}
