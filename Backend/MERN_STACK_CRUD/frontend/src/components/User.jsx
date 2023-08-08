import React, { useState } from "react";
import axios from "axios"
const User = () => {
  const [formdata, setFormdata] = useState({});

  const handleChange = (e) => {
    const { name, value } = e.target;

    setFormdata({
      ...formdata,
      [name]: value,
    });
  };

  const handleSubmit = async() => {
    const token = localStorage.getItem("token")
    console.log(formdata)
 const {data}=  await  axios.post("https://backend-crud-gfh5.onrender.com/user/create",formdata ,
 {
    headers: {
        Authorization: `Bearers ${token}`
    }
 } 
 
 )
 console.log(data)
  };

  const readData=()=> {

  }

  return (
    <div>
      <h1>Create User</h1>
      <div>
        <label htmlFor="">Email :-</label>
        <input
          name="email"
          type="text"
          placeholder="enter email..."
          onChange={handleChange}
        />
      </div>
      <div>
        <label htmlFor="">mobile :-</label>
        <input
          name="mobile"
          type="number"
          placeholder="enter mobile no..."
          onChange={handleChange}
        />
      </div>
      <div>
        <label htmlFor="">Country :-</label>
        <input
          name="country"
          type="text"
          placeholder="enter country..."
          onChange={handleChange}
        />
      </div>
      <div>
        <label htmlFor="">Gender :-</label>
        <input
          name="gender"
          type="text"
          placeholder="enter gender..."
          onChange={handleChange}
        />
      </div>

      <div>
        <label htmlFor="">Username :-</label>
        <input
          name="username"
          type="text"
          placeholder="enter username..."
          onChange={handleChange}
        />
      </div>
      <div>
        <label htmlFor="">Password :-</label>
        <input
          name="password"
          type="text"
          placeholder="enter password..."
          onChange={handleChange}
        />
      </div>
      <div>
        <label htmlFor="">Age :-</label>
        <input
          name="age"
          type="text"
          placeholder="enter age..."
          onChange={handleChange}
        />
      </div>
      <div>
        <button onClick={handleSubmit}>Submit</button>
      </div>
      <br /><br /><br /> <br />
      <button onClick={readData}>Read Data</button>
    </div>
  );
};

export default User;
