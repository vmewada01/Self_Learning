import logo from './logo.svg';
import './App.css';
import Counter from './Components/Counter';
import GitHub from './Components/GitHub';
import Navbar from './Navbar/Navbar';
import AllRoutes from './AllRoutes/AllRoutes';


function App() {
  return (
    <div className="App">
     {/* <Counter /> */}
     {/* <GitHub/> */}
     <Navbar/>
     <AllRoutes/>
        
    </div>
  );
}

export default App;
