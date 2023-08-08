import logo from './logo.svg';
import './App.css';
import Navbar from './Components/Navbar';
import MainRoutes from './Components/MainRoutes';
import FormBuilder from './Components/FormBuilder';
import FormList from './Components/FormList';

function App() {
  return (
    <div>
     {/* <Navbar /> */}
     {/* <MainRoutes /> */}
     <FormBuilder/>
     <FormList />
    </div>
  );
}

export default App;
