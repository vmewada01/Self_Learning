import logo from './logo.svg';
import './App.css';
import {Routes, Route} from "react-router-dom"
import Home from './Components/Home';
import Login from './Components/Login';
import Signup from './Components/Signup';
import Feed from './Components/Feed';
function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/login" element={<Login/>}/>
        <Route path="/signup" element={<Signup/>}/>
        <Route path="/feed" element={<Feed/>}/>
      </Routes>
    </div>
  );
}

export default App;
