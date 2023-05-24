import logo from './logo.svg';
import './App.css';
import Navbar from './Components/Navbar';
import Form from './Components/Form';
import Footer from './Components/Footer';
import { useContext } from 'react';
import { ThemeContext } from './Contexts/Theme';

function App() {
  const [theme, toggleTheme] = useContext(ThemeContext)
  return (
    <div className={theme==="dark" ? "dark": "light"}>
      <Navbar/>
      <Form />
      <Footer />
    </div>
  );
}

export default App;
