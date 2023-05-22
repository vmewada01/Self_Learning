import React, { useState } from "react";

const Form = () => {
  const initial = {
    name: "",
    gender: "",
    role: "",
    status: ""
  };
const [data, setData]= useState(initial)

const handleChange=(e)=>{
const {name, value ,type, checked}= e.target

const updated = type=== "checkbox" ? checked : value 
 
setData({
    ...data,
    [name]: updated
})

}
const submitFunc =(e)=>{
    e.preventDefault()
    console.log(data)
}

  return (
    <div>
      <h1>Form</h1>
      <form onSubmit={submitFunc}>
        <div>
          <input name='name' onChange={handleChange} type="name" value={data.name} placeholder="enter name" />
        </div>
        <div>
           <select name="gender" onChange={handleChange}>
            <option value="">gender</option>
           <option value="MALE">MALE</option>
           <option value="FEMALE">FEMALE</option>
           <option value="OTHER">OTHER</option>
           </select>
        </div>
        <div>
          <select name="role" onChange={handleChange}>
         <option value="Frontend">Frontend</option>
         <option value="Backend">Backend</option>

          </select>
        </div>
        <div>
          <input type="checkbox"  name='status' value={data.status} onChange={handleChange} />
          <label>Married</label>
        </div>
        <div>
            <input type="submit"/>
        </div>
      </form>
    </div>
  );
};

export default Form;
