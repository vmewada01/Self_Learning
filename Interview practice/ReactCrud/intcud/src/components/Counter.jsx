import { Button } from "@chakra-ui/react";
import React, { useReducer } from "react";

const reducer = (state, action) => {
  switch (action.type) {
    case "INCREMENT": {
      return {
        count: state.count + 1,
      };
    }
    case "DECREMENT": {
      return {
        count: state.count - 1,
      };
    }
    case "RESET": {
      return {
        count: 0,
      };
    }

    default:
      return state;
  }
};

const Counter = () => {
const[state, dispatch]= useReducer(reducer,{count:0})

  return <div>
    <h1>{state.count}</h1>
    <Button onClick={()=> dispatch({type:'INCREMENT'})}>incre</Button>
    <Button onClick={()=> dispatch({type: 'DECREMENT'})}>decre</Button>
    <Button onClick={()=>dispatch({type:'RESET'})}>reset</Button>
  </div>;
};

export default Counter;
