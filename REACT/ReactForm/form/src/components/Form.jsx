import React, { useState } from "react";
import '../App.css';

const Form = () => {

    
  const [Form, setForm] = useState({
    name: "",
    age: "",
    address: "",
    salary: "",
    Married: "false",

  });







  

  const onHandleChange = (e) => {
    let {name ,  files, checked ,value, type} =e.target;
    // console.log(name , age , address , salary , maritial_status, files, cheked ,value)
   
   if(type ==="checkbox"){
    setForm({
        ...Form,
        [name]: checked,
    })
   }
   else if(type ==="file"){
    setForm({
        ...Form,
        [name]: files,
    })
   }else{
     setForm({
        ...Form,
        [name]: value,
     })
   }
   
   
  };

  const onHandleSubmit = (e)=>{
  e.preventDefault();
  console.log(Form);
  }

  return (
    <div>
      <h1>****React Form****</h1>
      <form onSubmit={onHandleSubmit}>
        <div>
          <label>Name:</label>
          <input type="text" placeholder="Type Name Here" onChange={onHandleChange} name="name" value={Form.name}    />
        </div>

        <div>
          <label>Age:</label>
          <input type="number" placeholder="Type Age Here"  onChange={onHandleChange} name="age"  value={Form.age}    />
        </div>

        <div>
          <label>Address:</label>
          <input type="text" placeholder="Type Address Here" onChange={onHandleChange} name="address"  value={Form.address} />
        </div>

        <div>
          <label> Department :</label>
          <select name="department" onChange={onHandleChange} >
            <option value="">----</option>
            <option value="Hardware">Hardware</option>
            <option value="Software">Software</option>
          </select>
        </div>

        <div>
          <label>Salary:</label>
          <input type="number" placeholder="Type Salary Here" onChange={onHandleChange}  name="salary" value={Form.salary}  />
        </div>

        <div>
          <label> Married : </label>
          <input type="checkbox" name="Married" onChange={onHandleChange}  value={Form.maritial_status}/>
        </div>

        <div>
          <label>Profile Photo : </label>
          <input type="file" onChange={onHandleChange} files={Form.resume}  name="resume"   />
        </div>

        <button type="submit">Submit</button>
      </form>
     

      
    </div>
  );
};

export default Form;
