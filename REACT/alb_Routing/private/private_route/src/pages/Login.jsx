import React, { useContext, useState } from "react";
import { Navigate, useNavigate } from "react-router-dom";
import { AuthContext } from "../Context/Authcontext";

const Login = () => {
  const auth = useContext(AuthContext);
  const navigate = useNavigate();

  const [text, setText] = useState({
    email: "",
    password: "",
  });
  const handleChange = (e) => {
    const { name, value } = e.target;
    setText({
      ...text,
      [name]: value,
    });
  };

  // console.log(text)
  const handleSubmit = (e) => {
    e.preventDefault();

    fetch("https://reqres.in/api/login", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(text),
    })
      .then((res) => res.json())
      .then((res) => {
        console.log(res);
        alert("Success");
        auth.handleLogin(res.token);
        navigate("/dashboard");
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <div>
      <div>Login</div>
      <form onSubmit={handleSubmit}>
        <div>
          <input
            value={text.email}
            type="email"
            name="email"
            placeholder="enter email.."
            onChange={handleChange}
          />
        </div>
        <div>
          <input
            value={text.password}
            type="password"
            name="password"
            placeholder="enter password"
            onChange={handleChange}
          />
        </div>
        <div>
          <input type="submit" />
        </div>
      </form>
    </div>
  );
};

export default Login;
