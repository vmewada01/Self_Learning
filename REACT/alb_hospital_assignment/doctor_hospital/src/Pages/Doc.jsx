import { Button } from '@chakra-ui/react'
import React, { useEffect, useState } from 'react'

const Doc = () => {

    const [data, setData] = useState([])
    // GET /posts?_page=7&_limit=20
    useEffect(()=>{
   fetch("http://localhost:8080/posts")
   .then((res)=> res.json())
   .then((res)=> {
    console.log(res)
    setData(res)
   })

    },[])


  return (
    <div>
       <table style={{margin:"20px" }}>
        <tr>
            <th>ID</th>
            <th>DOCTOR'S NAME</th>
            <th>HOSPITAL</th>
            <th>SPECIALISATION</th>
            <th>SALARY</th>
            <th>DETAILS</th>
        </tr>


       
           {data.map((abc)=>{
            return(
                <tr key={abc.id}>
                <td>{abc.id}</td>
                <td>{abc.name}</td>
                <td>{abc.hospital}</td>
                <td>{abc.specialisation}</td>
                <td>{abc.salary}</td>
                <td><Button> view more</Button></td>
                </tr>
            )
           })}


       </table>

    </div>
  )
}

export default Doc