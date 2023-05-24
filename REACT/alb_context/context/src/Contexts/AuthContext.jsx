import React, { createContext, useContext, useEffect, useState } from "react";

export const AuthContext = createContext();

export function AuthContextProvider({ children }) {
  const [auth, isAuth] = useState(false);
  const [item, setItem] = useState([]);
  useEffect(() => {
    const login_api = async () => {
      try {
        const api = await fetch("https://reqres.in/api/users/");
        const data = await api.json();
        const new_data = data.data;
        console.log(new_data);
        setItem(new_data);
      } catch (err) {
        console.log(err);
      }
    };
    login_api();
  }, []);
   
  return (
    <AuthContext.Provider value={[auth, isAuth ,item]}>
      {children}
    </AuthContext.Provider>
  );
}
