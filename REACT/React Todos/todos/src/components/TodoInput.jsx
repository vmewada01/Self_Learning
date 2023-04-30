import React, { useState } from 'react'


const TodoInput = ({addTodo}) => {
    const [value, setValue] = useState("");

  return (
   
    <div>
        <div>TodoInput</div>
       <input type="text" value={value} placeholder='Type Something Here' onChange={(e) => {setValue(e.target.value)}}/>
       <button onClick={() =>{
         
          console.log(value)
          addTodo(value)
          setValue("");
       } }>Add</button>
 </div>
   )  
}

export default TodoInput