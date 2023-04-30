import React from 'react'
import TodoItem from './TodoItem';

const Todolist = ({todos, deleteTodo}) => {
  // console.log(children)
  return (
    <div>
        <h3>Here is your TODO list</h3>

   <ul>
  {todos.map((todo) =>(
    <TodoItem key= {todo.id} value={todo.value} deleteTodo={deleteTodo}/>
  ))}
   </ul>
    </div>
   
  );
};

export default Todolist;