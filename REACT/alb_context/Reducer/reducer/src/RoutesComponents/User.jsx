import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const User = () => {
  const ids = [1, 2, 3, 4, 5];
  const [data, setData] = useState([]);
  useEffect(() => {
    fetch("https://reqres.in/api/users")
      .then((res) => res.json())
      .then((res) => {
        console.log(res.data);
        setData(res.data);
      });
  }, []);
  return (
    <div>
      <h1>User</h1>
      {data.map((item) => {
        return (
          <div key={item}>
            <div>
              <img src={item.avatar} alt="" />
            </div>
            <div>{item.first_name}</div>
            <Link to={`/user/${item.id}`}>Get More Details </Link>
          </div>
        );
      })}
    </div>
  );
};

export default User;
