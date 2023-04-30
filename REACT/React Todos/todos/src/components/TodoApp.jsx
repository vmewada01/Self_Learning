 import React ,{useState} from 'react'
 import TodoInput from './TodoInput';
import TodoList from './Todolist';
import {v4 as uuidv4 } from "uuid"
import TodoItem from './TodoItem';

const TodoApp = () => {
    const [todos, setTodos] = useState([]);
    const addTodo = (xyz) => setTodos([...todos, {
        id: uuidv4(),
        value:xyz,
    },
    ]);

const deleteTodo =(value) => {
    console.log(value)
    setTodos(todos.filter((todo) => todo !== value));
};
  return (
    <div>
   <TodoInput addTodo={addTodo}/>
   
        <TodoList>
            {todos?.map((todo) =>(
         <TodoItem key= {todo.id} value= {todo.value} deleteTodo={deleteTodo}/>
            ) )}
        </TodoList>

    </div>
  )
}

export default TodoApp