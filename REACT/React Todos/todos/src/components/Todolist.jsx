import React from 'react'
import TodoItem from './TodoItem';




const TodoList = ({todos, deleteTodo}) => {
    console.log(todos)
  return (
    <div>
           <h3>Here is Your TODO List</h3>
           <ul>

           { todos?.length  && todos?.map((todo) =>(
       <TodoItem key= {todo.id} value ={todo.value} deleteTodo={deleteTodo} />
        
  
      
   ) )}
           </ul>
             
     
       

    </div>
   
  );
};

export default TodoList