import { useState } from "react";
import SecondWay from "./Comonents/SecondWay";
import Timer from "./Comonents/Timer";
import "./styles.css";

export default function App() {
  const [show, setShow] = useState(false)
  return (
    <div className="App">
  
  <SecondWay/>
   {show &&    <Timer/>  }
   <button onClick={()=> setShow(!show)}>Toggle</button>
   
    </div>
  );
}
