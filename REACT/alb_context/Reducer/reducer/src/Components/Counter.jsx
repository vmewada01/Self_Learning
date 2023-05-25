import React, { useReducer, useState } from "react";
import {
  CountReducer,
  decrementAction,
  incrementAction,
} from "../Reducer/Reducer";

 function  Counter(){
 const [state,dispatch] = useReducer(CountReducer,{count:0})
//  console.log(state)
//  console.log(dispatch)

  return (
    <div>
      <h1>Count :{state.count} </h1>
      <button onClick={() => dispatch(incrementAction)}>ADD</button>
      <button onClick={() => dispatch(decrementAction)}>REDUCE</button>
    </div>
  );
};

export default Counter;

function _Counter() {
  // WHEN USING STATE, HOW THE STATE GETS UPDATED
  // ITS WITHIN THE COMPONENT
  const [state, setState] = useState({ count: 0 });
  function handleIncrement() {
    setState(state + 1);
  }
  function handleDecrement() {
    setState(state - 1);
  }

  return (
    <div>
      <h1> Count : {state.count} </h1>
      <button onClick={handleIncrement}>ADD</button>
      <button onClick={handleDecrement}>REDUCE</button>
    </div>
  );
}



