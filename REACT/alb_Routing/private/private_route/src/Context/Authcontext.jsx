 
 import React, { createContext, useState } from "react"

 export const AuthContext = createContext()

 export function AuthContextProvider({children}){

   const [state, setState] = useState({
  
    isAuth: false,
    token: null
   })
   const handleLogin=({token})=>{
    setState({
        ...state,
        isAuth: true,
        token: token
    })
   }
   const handleLogOut=()=>{
    setState({
        ...state,
        isAuth: false,
        token: null
    })
   }

    return (
        <AuthContext.Provider value={{state,handleLogOut, handleLogin}}>
            {children}
        </AuthContext.Provider>
    )
 }