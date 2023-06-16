import logo from "./logo.svg";
import "./App.css";
import { useState } from "react";
import Button from "./Components/Button";

function App() {

  const [theme, setTheme] = useState("light")
  return <div className="App">
 <h2>Theme is {theme}</h2>
 <div> Click Me </div>
   <Button
 
    onClick={()=> setTheme(theme==="light" ? "dark": "light")}
    colorscheme={"red"}
    variant={"outline"}
    >
    Click Me
    </Button> 
  </div>;
}

export default App;
