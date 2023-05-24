import React, { createContext, useContext, useState } from "react"

export const ThemeContext = createContext()

export function ThemeContextProvider({children}){
 
     const [theme, setTheme] = useState("dark")

     const toggleTheme= ()=>{
        setTheme(theme==="dark"? "light": "dark")
     }

    return (
        <ThemeContext.Provider value={[theme, toggleTheme]}>
            {children}
        </ThemeContext.Provider>
    )
}
