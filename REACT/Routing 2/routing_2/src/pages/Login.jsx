import React, { useContext, useState } from 'react'
import { AuthContext } from '../context/AuthContext';

const Login = () => {
    const [loginCred, setLoginCred]= useState({});

    const {login} = useContext(AuthContext)

    const handleOnChange=(e)=>{
        const {name, value}   = e.target;
       setLoginCred({
        ...loginCred,
       [name]: value,
       })
        
    }

     const handleSubmit =(e)=>{
          e.preventDefault();
          login();
         // console.log(e)
          ///TODO
     }


  return (
    <div>Login
     <form  onSubmit={handleSubmit} style={{display: "flex", flexDirection:"column",margin: "auto", gap: "20px", maxWidth: "200px" }}>
   <input name="email"  type="email"  placeholder='enter email' onChange={handleOnChange}/>
   <input name="password" type="password"  placeholder='enter password....' onChange={handleOnChange} />
   <button type="submit">Login</button>


     </form>


    </div>
  )
}

export default Login