import React, { useState, useEffect } from 'react'
import '../App.css';




const Map = () => {
   
    const [details, setDetails] = useState([])
 
    useEffect(()=> {
  
        fetch("http://localhost:8080/todos")
        .then((r) => r.json())
        .then((d) => {
          console.log(d);
          setDetails(d)
        });
     },[]);
    

  return (
    <div>
 <table className="table">
       <thead>
        <tr className="row">
          <th>Name</th>
          <th>Age</th>
          <th>Address</th>
          <th>Department</th>
          <th>Salary</th>
        </tr>
       </thead>
       <tbody>
        {details.map((details)=>(
            <tr  className="row">
          <td>{details.name}</td>
          <td>{details.age}</td>
          <td>{details.address}</td>
          <td>{details.department}</td>
          <td>{details.salary}</td>
        </tr>

        ))}
       </tbody>


      </table>



    </div>
  )
}

export default Map