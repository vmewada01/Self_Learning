import React, { useEffect, useState } from 'react'
import { Link, useParams } from 'react-router-dom'

const UserPage = () => {
    const params = useParams()
    console.log(params)
    const [data, setData]= useState([])
    useEffect(()=>{
        fetch(`https://reqres.in/api/users/${params.user_id}`)
        .then((res)=> res.json())
        .then((res)=>{
         console.log(res.data)
         setData(res.data)
        })
 
       },[])
  
  

  return (
    <div>
        <h1>Single User Page</h1>
        <div>Name: {data.first_name} {data.last_name}</div>
    
        <div>Email: {data.email}</div>
        <div><img src={data.avatar} alt="" /></div>
        <h2>User : {params.user_id}</h2>
        <div>
            <Link to="/user">Go Back</Link>
        </div>

    </div>
  )
}

export default UserPage