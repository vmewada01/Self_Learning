import logo from './logo.svg';
import './App.css';
import Figma from './Components/Figma';
import { useContext } from 'react';
import { ThemeContext } from './Contexts/ThemeContext';

function App() {
  const [theme, toggleTheme] = useContext(ThemeContext)
  return (
    <div className={theme==="dark"? "dark": "light"} >
      <Figma />
     
    </div>
  );
}

export default App;
