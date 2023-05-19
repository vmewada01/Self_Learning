import { Routes, Route } from "react-router-dom";
import About from "../Pages/About";
import Home from "../Pages/Home";
import Login from "../Pages/Login";
import PrivateRoute from "../Pages/PrivateRoute";
import User from "../Pages/User";
import UserPage from "../Pages/UserPage";

function AllRoutes() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/About" element={<About />} />
        <Route path="/Login" element={<Login />} />
        <Route path="/User" element={
        <PrivateRoute>
          <User />
          </PrivateRoute>
        } />
        <Route path="/User/:id" element={
            <PrivateRoute>
        <UserPage />
        </PrivateRoute>
        } />
      </Routes>
    </>
  );
}

export default AllRoutes;
