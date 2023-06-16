import React from "react";
import { Route, Routes } from "react-router-dom";
import Login from "./Login";
import Home from "./Home";

const MainRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/login" element={<Login />} />
    </Routes>
  );
};

export default MainRoutes;
