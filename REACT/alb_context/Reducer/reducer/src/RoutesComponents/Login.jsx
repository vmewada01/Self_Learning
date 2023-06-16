import React, { useContext, useState } from 'react'
import { AuthContext } from '../Context/AuthContext'
import { useNavigate } from 'react-router-dom'

const Login = () => {

 const auth = useContext(AuthContext)
 const navigate = useNavigate();

   const [formstate, setFormState] = useState({
    email: "",
    password: ""
   })

 const handleChange=(e)=>{
    const {name, value} = e.target
     setFormState({
        ...formstate,
       [name]: value
     })
 }


   const handleSubmit=(e)=>{
       e.preventDefault()

       fetch("https://reqres.in/api/login" , {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(formstate)
        
       })
       .then((res)=> res.json())
       .then((res)=>{
        console.log(res)
        alert("Success")
        auth.handleLogin(res.token)
        navigate("/user")
       })
       .catch((err)=>{
        console.log(err)
       })

   }


  return (
    <div>
       <form onSubmit={handleSubmit}>
       <div>
        <input value={formstate.email} name="email" onChange={handleChange} type="email" placeholder='enter email..'  />
       </div>
       <div>
        <input value={formstate.password} name="password" onChange={handleChange} type="password" placeholder='enter password..'  />
       </div>
       <div>
        <input type="submit" />
       </div>


       </form>


    </div>
  )
}

export default Login