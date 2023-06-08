import React, { useState } from "react";
import { store } from "../Redux/store";
import { handledecrement,handleincrement } from "../Redux/action";
import { useDispatch, useSelector } from "react-redux";

const Counter = () => {

   const counter = useSelector((store)=> store.AppReducer.counter)

 const dispatch = useDispatch()

//  console.log(counter)

  return (
    <div>
      <h1>Heading </h1>
      <h2> counter application : {counter}</h2>
      <button onClick={()=> dispatch(handleincrement())}>Increment</button>
      <button onClick={()=> dispatch(handledecrement())}>Decrement</button>
         
    </div>
  );
};

export default Counter;
