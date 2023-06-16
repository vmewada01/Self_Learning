import logo from './logo.svg';
import './App.css';
import Counter from './Components/Counter';
import GitHub from './Components/GitHub';
import Navbar from './Navbar/Navbar';
import AllRoutes from './AllRoutes/AllRoutes';


function App() {
  console.log(process.env.REACT_APP_URL)
  return (
    <div className="App">
    <h4>ENV: {process.env.REACT_APP_URL}</h4>
     {/* <Counter /> */}
     {/* <GitHub/> */}
     <Navbar/>
     <AllRoutes/>
        
    </div>
  );
}

export default App;
