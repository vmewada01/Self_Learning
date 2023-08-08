import logo from './logo.svg';
import './App.css';
import {Routes, Route} from "react-router-dom"
import Login from './components/Login';
import Signup from './components/Signup';
import User from './components/User';

function App() {
  const handlelogout=()=>{
    localStorage.setItem("token", "")
  }
  return (
    <div className="App">
        <button onClick={handlelogout}>LOGOUT</button>
      <Routes>
        <Route path="/auth/login" element={<Login />} />
        <Route path="/auth/signup" element={<Signup />} />
        <Route path="/user" element={<User />} />
        
      </Routes>
    </div>
  );
}

export default App;
