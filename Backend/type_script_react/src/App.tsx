import React from 'react';
import logo from './logo.svg';
import './App.css';
import Todo from './config/Todo';
import TodoInput from './config/TodoInput';

function App() {



  return (
    <div className='App'>
      <Todo label={"Todo_Items"} />
      <TodoInput />
     
    </div>
  );
}

export default App;
