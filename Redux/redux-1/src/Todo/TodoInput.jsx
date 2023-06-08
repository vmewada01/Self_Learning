import React, { useState } from 'react'

const TodoInput = ({addTodo}) => {
    const [currenttodo, setCurrentTodo] = useState("")
  
    const addTodoHandler =()=>{
        const payload = {
            title: currenttodo,
            status: false
        }
        addTodo(payload)
        setCurrentTodo("")
    }

  return (
    <div>
        <input name='text' onChange={(e)=> setCurrentTodo(e.target.value)} value={currenttodo} placeholder='enter todo'  type="text" />
        <button onClick={addTodoHandler}>add to todo</button>
    </div>
  )
}

export default TodoInput