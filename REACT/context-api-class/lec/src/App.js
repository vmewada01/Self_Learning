import logo from './logo.svg';
import './App.css';
import React ,{useContext, useReducer} from "react";
import Navbar from './components/Navbar';
import Body from './components/Body';
import { CartProvider } from './context/CartContext';
import { ThemeContext } from './context/ThemeContext';
 

//  const reducer = (state, {type, payload} )=>{

//   switch (type){
//     case "INCREMENT": {
//       return state +payload;
//     }
//     case "DECREMENT":{
//       return state - payload;
//     }
//     default:{
//       console.log("Type incorrect", type)
//       return state;
//     }
//   }
//  }





function App() {
  // const [counter, dispatch]= useReducer(reducer,0)
 
  const {isLight} = useContext(ThemeContext);
 
  return (
     <div className={`App ${isLight ? "Light" : "dark"}`}>
    {/* //   Counter: {counter}
    //   <div>
    //   <button onClick={()=> dispatch({type: "DECREMENT" , payload: 1})}>
    //     -
    //   </button>
    //   <button onClick={()=> dispatch({type: "INCREMENT" ,payload: 1})}>
    //     +
    //   </button>

    //   </div> */}
      <CartProvider>
      <Navbar/>
      <Body/>

      </CartProvider>
     
    
    </div>
  );
}

export default App;
