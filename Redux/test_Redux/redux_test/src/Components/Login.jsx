import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import { getLoginFailure, getLoginRequest, getLoginSuccess } from '../AUTHREDUCER/action'
import { getDataSuccess } from '../APPREDUCER/action'
import  axios from "axios"
import { useNavigate } from 'react-router-dom'

const Login = () => {
 
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const dispatch = useDispatch()
    const navigate = useNavigate()

 const loginDAta=(e)=> {
    e.preventDefault()
 
    const submitDetails={
        email: email,
        password:password
    }

    dispatch(getLoginRequest())
    axios.post("https://reqres.in/api/login",submitDetails)
    .then((res)=> {
        alert("login Succesfull")
     dispatch(getLoginSuccess(res.data))
     navigate("/")
    })
    .catch((err)=> {
     dispatch(getLoginFailure())
    })
 


 }

   

  return (
    <div>
        <form onSubmit={loginDAta} style={{magin:"auto"}}>
        <div><label htmlFor="">Email: </label><input onChange={(e)=> setEmail(e.target.value) } type="text" value={email} placeholder='enter email' /></div>
        <div><label htmlFor="">Password: </label><input onChange={(e)=> setPassword(e.target.value)} type="password" value={password} placeholder='enter password' /></div>
        <div><input type="submit" /></div>
        </form>

    </div>
  )
}

export default Login