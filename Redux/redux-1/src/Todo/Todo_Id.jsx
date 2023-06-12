import React, { useEffect } from 'react'
import { useState } from "react";
import { loginRequest, loginFailure,loginSccess } from '../AuthREducer/action';
import { useDispatch, useSelector } from "react-redux";
import axios from "axios";
import { loadData } from '../Utils/actionStore';

const Todo_Id = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const dispatch = useDispatch();
  const isAuth = useSelector((store) => store.AuthReducer.isAuth);
  console.log(isAuth);
  const handleCheck = () => {
    if (email) {
      const payload = {
        email: email,
        password: password,
      };
      dispatch(loginRequest());

      axios
        .post("https://reqres.in/api/login/", payload)
        .then((res) => {
          return dispatch(loginSccess(res.data));
        })
        .catch((err) => {
          return dispatch(loginFailure());
        });
    }
  };

  
  useEffect(() => {
    // Retrieve token from local storage and set it in Redux state
   const token =  loadData("token")
    if (token) {
      dispatch(loginSccess(token));
    }
  }, [dispatch]);


  return (
    <div>
         
      <div>
     <input placeholder='email' onChange={(e)=> setEmail(e.target.value)} value={email} type='name' name='email'  />
     <input placeholder="password" onChange={(e)=> setPassword(e.target.value)} value={password} type="password" name='password'/>
       <button onClick={handleCheck}>Submit</button>
       </div>
    
    </div>
  )
}

export default Todo_Id