import React, { createContext, useState } from "react";

export const AppContext = createContext();

export const AppProvider = ({ children }) => {
  const [isAuth, toggleAuth] = useState(false)

  const login = (username,password)=>{
    if(username && password){
      toggleAuth(true)
    
    }
  }

  const logOut = (username,password)=>{
      toggleAuth(false);
 
  }

  return (<AppContext.Provider value={{isAuth, login, logOut}}>{children}</AppContext.Provider>
  
  );
};
