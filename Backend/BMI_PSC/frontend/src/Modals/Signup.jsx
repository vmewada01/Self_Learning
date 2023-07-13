import React, { useState } from "react";

const Signup = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const handleSubmit = () => {
    const payload = {
      name,
      email,
      password,
    };
    console.log(payload);
    fetch("http://localhost:8000/signup", {
      method: "POST", // or 'PUT'
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(payload),
    })
      .then((res) => res.json())
      .then((res) => console.log(res));
  };

  return (
    <div>
      <h1>Signup</h1>
      <div>
        <label htmlFor="">Name :-</label>
        <input
          type="text"
          placeholder="enter name.."
          onChange={(e) => setName(e.target.value)}
        />
      </div>
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

export default Signup;
