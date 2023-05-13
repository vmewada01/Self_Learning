import React, { useState } from "react"

function Form(){

  const [value, setValue]= useState("")
  // console.log(value)
  const [input, setInput] = useState([])
  
  const submitFunc=()=>{
    setInput(...input, value)
    console.log(input)
  }

  const clearFun=()=>{
    setInput("")
    setValue("")
  }
 
 return (
   <div>
     <input placeholder="enter input here.." type="text"  onChange={(e)=> {
       setValue(e.target.value)
       //console.log(e.target.value)
     }} value={value}  />
     <button onClick={submitFunc}>Submit</button>
     <h1>Respected Output: {input} </h1>
     <button onClick={clearFun}>Clear</button>
     </div>
 )

}

export default Form 