import logo from "./logo.svg";
import "./App.css";
import Counter from "./Components/Counter";

import Todo from "./Todo/Todo";
import { useState } from "react";
import { loginFailure, loginRequest, loginSccess } from "./AuthREducer/action";
import { useDispatch, useSelector } from "react-redux";
import axios from "axios";


function App() {

 const [email,setEmail] = useState("")
 const [password, setPassword] = useState("")

 const dispatch= useDispatch()
 const isAuth = useSelector((store)=> store.AuthReducer.isAuth)
console.log(isAuth)
 const handleCheck=()=> {
if(email){
  const payload={
    email: email,
    password: password
  }
  dispatch(loginRequest())

 axios.post("https://reqres.in/api/login/",payload)
 .then((res)=>{
  return dispatch(loginSccess(res.data))
 })
 .catch((err)=> {
  return dispatch(loginFailure())
 })

}
 }

  return (
    <div className="App">
      <Counter />
      <br/>
      <div>
     <input placeholder='email' onChange={(e)=> setEmail(e.target.value)} value={email} type='name' name='email'  />
     <input placeholder="password" onChange={(e)=> setPassword(e.target.value)} value={password} type="password" name='password'/>
       <button onClick={handleCheck}>Submit</button>
       </div>
       <br/>
   { isAuth &&  <Todo />}
     
    </div>
  );
}

export default App;
