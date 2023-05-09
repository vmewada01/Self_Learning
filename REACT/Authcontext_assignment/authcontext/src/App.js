import logo from './logo.svg';
import './App.css';


import Navbar from './components/Navbar';
import User from './components/User';
import { useContext } from 'react';
import { ThemeContext } from './Context/ThemeContext';



function App() {
  const { isLight } = useContext(ThemeContext);
  return (

    <div className={`App ${isLight ? "light" : "dark"}`}>
      <Navbar />
      <User />
    </div>

  );
}

export default App;
