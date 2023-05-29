import React, { useState } from "react"


 function ADD_todo({handleAdd}){
const [text, setText] = useState("")
//const  [item ,setItem]= useState([])


  return(
    <div>
      <div>
    <input type="text" placeholder='enter' value={text} onChange={(e)=> setText(e.target.value)} />
    <button onSubmit={handleAdd(text)}>Add</button>
      </div>

    </div>
  )
}

export default ADD_todo