import React from "react";
import { Link } from "react-router-dom";

const Link_Files = () => {
  return (
    <div style={{ display: "flex", gap: "2rem", justifyContent: "center" }}>
      <Link to="/">Home</Link>
      <Link to="/login">Login</Link>
      <Link to="/dashboard">Dashboard</Link>

      <Link to="/setting">Setting</Link>
    </div>
  );
};

export default Link_Files;
