import React, { useState } from "react";

const BMI_Data = () => {
    const [data, setData]= useState([])
  const handleProfile = () => {
    const token = localStorage.getItem("token") || "";
   // console.log(token);
  
    fetch("http://localhost:8000/getCalculation", {
      method: "GET",
      headers: {
        Authorization: `Bearer ${token}`,
      },
    })
      .then((res) => res.json())
      .then((res) => {
        //console.log(res.History_BMI);
        if(res.History_BMI.length>0){
            for(let i=0; i<res.History_BMI.length; i++){
                setData([...data], res.History_BMI[i])
            }
        }
      });
      console.log(data)
  };
  return (
    <div>
      <button onClick={handleProfile}>Get_BMI_History</button>
      {data.length>0 && data.map((item)=> {
        return (
        <div key={item.id}>
            <div>{item.BMI}</div>
            <div>{item.height}</div>
            <div>{item.weight}</div>
            <div>{item.user_id}</div>
            <div>{item.createdAt}</div>
            <div>{item.updatedAt}</div>
        </div>
        )
      })}
    </div>
  );
};

export default BMI_Data;
