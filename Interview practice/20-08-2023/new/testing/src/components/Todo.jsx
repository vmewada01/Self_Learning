import React, { useState } from 'react'

const Todo = () => {
    const [text, setText]= useState("")
    const [correctvalue , setCorrectValue]= useState([])
    const handleAdd=()=> {
        setCorrectValue([...correctvalue, text])
        localStorage.setItem("checking",JSON.stringify(correctvalue))
    }
    let  newItem = [localStorage.getItem("checking")]
   
    console.log(typeof newItem)
  return (
    <div>
      <h1>Todo application</h1>
      <div>Todo application working processe</div>
      <div><input type="text"  onChange={(e)=> setText(e.target.value)} placeholder='enter text here 'style={{fontSize:"2rem", borderRadius:"0.5rem"}} />
      <span><button onClick={handleAdd} style={{borderRadius:"0.5rem" ,fontSize:"2rem"}}>Add</button></span>

      </div>
      <div>
        {newItem.map((item)=> {
            return (
            <div>
               <div>{item}</div>


            </div>
            )
        })}
      </div>



    </div>
  )
}

export default Todo