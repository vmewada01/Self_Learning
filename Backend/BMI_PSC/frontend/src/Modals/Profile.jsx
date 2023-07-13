import React, { useState } from "react";

const Profile = () => {
    const [data, setData]= useState([])
  const handleProfile = () => {
    const token = localStorage.getItem("token") || "";
   // console.log(token);
  
    fetch("http://localhost:8000/getProfile", {
      method: "GET",
      headers: {
        Authorization: `Bearer ${token}`,
      },
    })
      .then((res) => res.json())
      .then((res) => {
        console.log(res);
        setData([...data,res])
      });
  };
  return (
    <div>
      <button onClick={handleProfile}>GET_PROFILE</button>
      {data.length>0 && data.map((item)=> {
        return (
        <div key={item.id}>
            <div>{item.name}</div>
            <div>{item.email}</div>
        </div>
        )
      })}
    </div>
  );
};

export default Profile;
