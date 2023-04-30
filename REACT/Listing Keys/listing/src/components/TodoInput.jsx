import React from 'react'
import { useState } from 'react';

const TodoInput = ({addTodo}) => {
    const [value, setValue] = useState("");
  return (
    <div>
        <input type='text' placeholder='new todo item'
        value={value}
         onChange={(e) =>{
          setValue(e.target.value)
         }}
          />
        <button onClick={() => {
            console.log(value);
            addTodo(value)
            setValue("");
        }}>Add</button>
    </div>
  )
}

export default TodoInput