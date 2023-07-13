import React, { useState } from "react";

const Login = () => {

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const handleSubmit = () => {
    const payload = {
        email,
      password,
    };
    console.log(payload);
    fetch("http://localhost:8000/login", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(payload),
    })
      .then((res) => res.json())
      .then((res) => {
        localStorage.setItem("token",res.token)
      });
  };

  return (
    <div>
      <h1>Login</h1>
     
      <div>
        <label htmlFor="">Email :-</label>
        <input
          type="text"
          placeholder="enter email..."
          onChange={(e) => setEmail(e.target.value)}
        />
      </div>
      <div>
        <label htmlFor="">Password :-</label>
        <input
          type="text"
          placeholder="enter password..."
          onChange={(e) => setPassword(e.target.value)}
        />
      </div>
      <div>
        <button onClick={handleSubmit}>Submit</button>
      </div>
    </div>
  );
};

export default Login;
