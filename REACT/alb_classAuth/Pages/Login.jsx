import axios from "axios";
import { useContext, useState } from "react";
import { Navigate, useNavigate } from "react-router-dom";
import { AuthContext } from "../Context/AuthContext";

const userLogin=({email,password})=>{
  return   axios({
       url: "https://reqres.in/api/login",
       method: "POST",
       data:{
        email,
        password
       }
     })
}

function Login(){

const [email, setEmail]= useState("")
const [password, setPassword]= useState("")
const [state, dispatch] = useContext(AuthContext)
const navigate = useNavigate();


const FormSubmit=(e)=>{
  e.preventDefault()
  userLogin({email,password}).then((res)=>{

    dispatch({
      type: "LOGIN_SUCCESS",
      payload:{
        token: res.data.token
      }
    })
    navigate("/User");
  })
}

  if(state.isAuth){
    return <Navigate to="/" /> 
  }

 





  return (

    <>
      <form onSubmit={FormSubmit}>

           <div>
             <input value={email} 
             type="email"
             name="email"
             onChange={(e)=> setEmail(e.target.value)}
             placeholder="enter name" />
           </div>

           <div>
             <input value={password}
             type="password"
             name="password" 
             onChange={(e)=> setPassword(e.target.value)}
             placeholder="enter password" />
           </div>
           
           <div>
             <input type="submit"
          
            />
           </div>




      </form>


    </>

  )
}


export default Login