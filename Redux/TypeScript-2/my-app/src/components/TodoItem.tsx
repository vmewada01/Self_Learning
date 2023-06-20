import React from 'react'
import { TodoItems } from './Todo'



const TodoItem = (props: TodoItems) => {
   const {id, title,status, updateTodos, deleteTodos} = props
 
   const handleStatus=()=> {
    if(updateTodos){
        updateTodos()
    } 
        
   }
   const deleteFunc=()=> {
    if(deleteTodos){
        deleteTodos()
    }
   }
     
  return (
    <div>
        <span>
        {title} - <button onClick={handleStatus} >{status? "True": "False"}</button> <button onClick={deleteFunc}>Delete Todo</button>
        </span>
    </div>
  )
}

export default TodoItem