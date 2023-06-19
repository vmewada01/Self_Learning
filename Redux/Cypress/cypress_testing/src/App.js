import logo from './logo.svg';
import './App.css';
import { useState } from 'react';
import  axios from "axios";
import Form from './components/Form';


function App() {
 const [counter ,setCounter] = useState(0)

  return (
    <div className="App">
     <h1>The Count is :  {counter}</h1>
     <button className='addCounter' onClick={()=> setCounter((prev)=> prev+1 )}>Add</button>
     <button className='reduceCounter' onClick={()=> setCounter((prev)=> prev-1)}>Reduce</button>
     <Form />
    </div>
  );
}

export default App;
