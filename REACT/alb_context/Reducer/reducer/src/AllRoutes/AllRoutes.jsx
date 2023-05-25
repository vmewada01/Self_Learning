import React from "react";
import { Route, Routes } from "react-router-dom";
import Home from "../RoutesComponents/Home";
import About from "../RoutesComponents/About";
import User from "../RoutesComponents/User";
import Contact from "../RoutesComponents/Contact";
import UserPage from "../RoutesComponents/UserPage";

const AllRoutes = () => {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About/>} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/user" element={<User/>} />
        <Route path="/user/:user_id" element={<UserPage/>} />
      </Routes>
    </div>
  );
};

export default AllRoutes;
