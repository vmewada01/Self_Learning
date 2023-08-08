import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const [formdata, setFormdata] = useState({});
 const navigate= useNavigate()
  const handleChange = (e) => {
    const { name, value } = e.target;

    setFormdata({
      ...formdata,
      [name]: value,
    });
  };

  const handleSubmit = async() => {
try{
    const {data}= await axios.post( "http://localhost:8007/auth/login",formdata)
    const msg= data.msg
    alert(msg)
    navigate("/feed")
}
 catch(err){
   
    if(err.response.status===401){
        alert("Invalid Credentials")
    }
 }
  };

  return (
    <div>
      <h1>Login</h1>

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
        <button onClick={handleSubmit}>Submit</button>
      </div>
    </div>
  );
};

export default Login;
