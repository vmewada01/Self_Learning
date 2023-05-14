import logo from './logo.svg';
import Style from "./Styles/Navbar.module.css"
import Navbar from './components/Navbar';
import AllRoutes from "./Routes/AllRoutes"
import Footer from './components/Footer';



function App() {
  return (
    <>
    <Navbar/>
    <AllRoutes />
    <Footer/>
      </>
  
  );
}

export default App;
