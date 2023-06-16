import React, { useState } from "react";

const NewForm = () => {
  const initial = {
    name: "",
    age: "",
    address: "",
    department: "",
    salary: "",
    status: "",
    file: "",
  };
  const [data, setData] = useState([initial]);
     const [value, setValue] = useState([])

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;

    const updated = type === "checkbox" ? checked : value;

    setData({
      ...data,
      [name]: updated,
    });
  };
  const submitFunc = (e) => {
    e.preventDefault();
    
   setValue([ data])
  //setData("")
   // setData(data)
   // console.log(value);
   console.log(data)
  };

  return (
    <div>
      <h1>Form</h1>
      <form onSubmit={submitFunc}>
        <div>
          <input
            name="name"
            onChange={handleChange}
            type="name"
            value={data.name}
            placeholder="enter name"
          />
        </div>
        <div>
          <input
            name="age"
            onChange={handleChange}
            type="age"
            value={data.age}
            placeholder="enter age"
          />
        </div>
        <div>
          <input
            name="address"
            onChange={handleChange}
            type="address"
            value={data.address}
            placeholder="enter address"
          />
        </div>
        <div>
          <input
            name="salary"
            onChange={handleChange}
            type="salary"
            value={data.salary}
            placeholder="enter salary"
          />
        </div>
        <div>
          <select name="department" onChange={handleChange}>
            <option value="">department</option>
            <option value="HARDWARE">HARDWARE</option>
            <option value="SOFTWARE">SOFTWARE</option>
            <option value="GENERAL">GENERAL</option>
          </select>
        </div>

        <div>
          <input
            type="checkbox"
            name="status"
            value={data.status}
            onChange={handleChange}
          />
          <label>Married</label>
        </div>
        <div>
          <input
            type="file"
            name="file"
            value={data.file}
            onChange={handleChange}
          />
        </div>
        <div>
          <input type="submit" />
        </div>
      </form>

      <table style={{border:"1px solid black"}}>
      
          <tr>
            <th>Name</th>
            <th>Age</th>
            <th>Address</th>
            <th>Department</th>
            <th>Salary</th>
            <th>Maritial Status</th>
          </tr>
      
  
       
              {/* <tr> */}
                {value?.map((abc)=>{
                  return (
                    <tr>
                      <td>{abc.name}</td>
                      <td>{abc.age}</td>
                      <td>{abc.address}</td>
                      <td>{abc.department}</td>
                      <td>{abc.status}</td>
                      <td>{abc.salary}</td>
                      </tr>
                  )
                })}
                {/* <td> {data.name}</td>
                <td> {data.age}</td>
                <td> {data.address}</td>
                <td> {data.department}</td>
                <td> {data.status}</td>
                <td> {data.salary}</td>
              </tr> */}
      
      </table>
    </div>
  );
};

export default NewForm;
