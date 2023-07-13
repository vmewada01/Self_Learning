import React, { useState } from "react";

const BMI = () => {

  const [height, setHeight] = useState("");
  const [weight, setWeight] = useState("");
  const handleSubmit = () => {
    const payload = {
        height,
      weight,
    };
 const token = localStorage.getItem("token") || ""

    fetch("http://localhost:8000/calculateBMI", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`
      },
      body: JSON.stringify(payload),
    })
      .then((res) => res.json())
      .then((res) => {
         console.log(res)
         const bmi = JSON.parse(res.BMI)
         alert(`BMI is ${bmi}`)
      });
  };

  return (
    <div>
      <h1>BMI CALCULATOR</h1>
     
      <div>
        <label htmlFor="">Height :-</label>
        <input
          type="text"
          placeholder="enter height..."
          onChange={(e) => setHeight(e.target.value)}
        />
      </div>
      <div>
        <label htmlFor="">Weight :-</label>
        <input
          type="text"
          placeholder="enter weight..."
          onChange={(e) => setWeight(e.target.value)}
        />
      </div>
      <div>
        <button onClick={handleSubmit}>calculate</button>
      </div>
    </div>
  );
};

export default BMI;
