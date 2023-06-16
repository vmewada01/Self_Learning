import React from "react";
import { Route, Routes } from "react-router-dom";
import Home from "../RoutesComponents/Home";
import About from "../RoutesComponents/About";
import User from "../RoutesComponents/User";
import Contact from "../RoutesComponents/Contact";
import UserPage from "../RoutesComponents/UserPage";
import PrivateRoute from "./PrivateRoute";
import Login from "../RoutesComponents/Login";

const AllRoutes = () => {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About/>} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/login" element={<Login />} />
        <Route path="/user" element={
          <PrivateRoute>
        <User/>
        </PrivateRoute>
        
        } />
        <Route path="/user/:user_id" element={
          <PrivateRoute>
        <UserPage/>
        </PrivateRoute>
        } />
      </Routes>
    </div>
  );
};

export default AllRoutes;
