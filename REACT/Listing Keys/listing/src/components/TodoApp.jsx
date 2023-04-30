import React, { useState } from 'react'
import TodoInput from './TodoInput'
import Todolist from './Todolist'
import { v4 as uuidv4 } from 'uuid';


const TodoApp = () => {

    const [todos, setTodos]= useState([]);
    // console.log(todos)

    const addTodo = (xyz) => {
        setTodos([...todos, {
            id: uuidv4(),
            value:xyz,
        },
    ]);
        // console.log(todos)
        
    }
    const deleteTodo = (value) => {
      console.log(value)
        setTodos(todos.filter((todo)=> todo !==value));
    };
  return (
    <div>TodoApp
  <TodoInput addTodo={addTodo}/>
   <Todolist todos={todos} deleteTodo={deleteTodo}/>

    </div>
  )
}

export default TodoApp