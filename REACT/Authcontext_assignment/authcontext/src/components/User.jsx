import React, { useContext, useEffect, useState } from "react";
import axios from "axios";
import { AppContext } from "../Context/AppContext";

const User = () => {
  const [data, setData] = useState(null);
  const { isAuth } = useContext(AppContext);

  useEffect(() => {
    axios({
      url: "https://reqres.in/api/users",
      method: "GET",
    })
      .then((d) => {
        console.log(isAuth);
        setData(d.data.data);
      })
      .catch((err) => console.log("error", err));
  }, []);
  return (
    <div>
      {isAuth ? (
        data?.map((user) => (
          <div key={user.id}>
            <div>{user.id}</div>
            <div>
              <img src={user.avatar} alt="img" />
            </div>
            <div>Name: {user.first_name}</div>
            <div>Last Name: {user.last_name}</div>
            <div>Email: {user.email}</div>
          </div>
        ))
      ) : (
        <h1>Please Login</h1>
      )}
    </div>
  );
};

export default User;
