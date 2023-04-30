import logo from './logo.svg';
import './App.css';
import { Route, Routes } from 'react-router-dom';
import Navbar from './Components/Navbar';
import Home from './Components/Home';
import About from './Components/About';
import Products from './Components/Products';
import Product from './Components/Product';


function App() {
  return (
    <div className="App">
      <Navbar/>
      <Routes>
      <Route path="" element={<Home/>}  />
      <Route path="about" element={<About/>}  />
      <Route path="products/*" element={<Products/>}  >
      <Route path=":id" element={<Product/>}  />
      </Route>
      </Routes>
    </div>
  );
}

export default App;
