import logo from './logo.svg';
import './App.css';
import TodoApp from './components/TodoApp';
import Counter from './components/Counter';
import { useState } from 'react';
import Todolist from './components/Todolist';

function App() {
  const [toggle, setToggle] = useState(false);
  return (
    <div className="App">
    <button onClick={ () => setToggle(!toggle)}>
     {toggle ? "Show Todo App" : "Show Counter App"}
      </button>
    {toggle ? <Counter/> : <TodoApp/>}
   
    </div>
  );
}

export default App;
