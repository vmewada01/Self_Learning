import logo from "./logo.svg";
import "./App.css";
import { Route, Routes } from "react-router-dom";
import Login from "./Modals/Login";
import Signup from "./Modals/Signup";
import BMI from "./Modals/BMI";
import BMI_Data from "./Modals/BMI_Data";
import Profile from "./Modals/Profile";

function App() {
  const handlelogout=()=>{
    localStorage.setItem("token", "")
  }
  return (
    <div className="App">
      <button onClick={handlelogout}>LOGOUT</button>
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/bmi" element={<BMI />} />
        <Route path="/bmi_data" element={<BMI_Data />} />
        <Route path="/profile" element={<Profile />} />
      </Routes>
    </div>
  );
}

export default App;
