import React from "react";
import "./Button.css"
const Button = ({children, colorscheme, variant,onClick}) => {
  return <button
  data-testId="customButton"
  className={`button ${colorscheme || "blue"} ${variant || "ghost"}`}
  onClick={onClick}  
  >{children}</button>;
};

export default Button;
