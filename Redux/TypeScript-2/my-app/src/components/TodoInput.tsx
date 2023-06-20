import React, { useState } from 'react'

export interface TodoInputProps{
    addHandler: (value: string)=> void
}

const TodoInput = ({addHandler}: TodoInputProps) => {
   const [inputText, setInputText] = useState<string>("")

   const changeHandler:React.ChangeEventHandler<HTMLInputElement> =(e)=> {
    setInputText(e.target.value)
   }

   const UpdateHandler=()=> {
    addHandler(inputText)
    setInputText("")
   }

  return (
    <div>
   <input value={inputText} onChange={changeHandler} />
    <button onClick={UpdateHandler}>ADD TODO</button>
   
    </div>
  )
}

export default TodoInput