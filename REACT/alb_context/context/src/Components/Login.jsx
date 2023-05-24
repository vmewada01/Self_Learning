import React, { useState } from 'react'

const Login = () => {
    const initial ={
        name: "",
        password:""
    }
 
  const [change, setChange] = useState(initial)
 
  const [data, setData] = useState([])
       
  const submit =()=>{
  
  setData(change)
  console.log(change)
  
  }

  return (
    <div>
     <h1>Login Form </h1>
     <div>
        <input value={change.email} type="email" name="email" placeholder='Enter Name...' onChange={(e)=> setChange(e.target.value)} />
     </div>
     <div>
        <input value={change.password} type="password" name="password" placeholder='Enter Password...' onChange={(e)=> setChange(e.target.value)} />
     </div>
     <div>
        <button onClick={submit} >Submit</button>
     </div>

    </div>
  )
}

export default Login