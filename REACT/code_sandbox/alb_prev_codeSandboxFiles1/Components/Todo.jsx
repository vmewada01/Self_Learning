import { useState } from "react"

function Todo(){
const [title, setTitle] = useState(false)
const [text, setText] = useState("")
const [todos, setTodos] = useState([])

const handleClear=()=>{
  setText("")
}
const titleValue=()=>{
  setTitle(!title)
}
const handleAdd=()=>{

setTodos([...todos, text])
handleClear()
console.log(todos)
}

  const handleText=(e)=>{
  // console.log(e.target.value)
    setText(e.target.value)
  }
  return(
<div>
   <h1>Todo App</h1>
   <input type="text" value={text} placeholder="enter name.." onChange={handleText}/>
   <button onClick={handleClear} >Clear Text</button>
   <button onClick={handleAdd}>Add</button>

   <p>Text : {text}</p>
   <ul>
 
       {
         todos.map((abc)=>{
           return(
             <div>
             <li>
               {abc}
             </li>
             <button onClick={titleValue}>{title? "true": "false"}</button>
             </div>
           )
         })
       }
    
   </ul>
</div>
  )
}


export default Todo