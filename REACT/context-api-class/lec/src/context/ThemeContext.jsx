import { createContext, useState } from "react";

export const ThemeContext = createContext()

export const ThemeProvider = ({children})=> {
 const [theme, setTheme]  = useState("Light");

const toggleTheme= ()=>{
     if(theme === "light"){
        setTheme("dark");

     }else setTheme("light");
}
return(
    <ThemeContext.Provider
    value={{
        theme: theme,
        isLight: theme=="Light",
        toggleTheme: toggleTheme,

    }}>
        {children}
    </ThemeContext.Provider>
)
}
