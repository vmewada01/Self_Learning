import React, { useEffect, useRef } from 'react'

const Input = () => {
  
    const inputRef= useRef(null)

    const focus=()=>{
       inputRef.current.focus()
    
    }
   
  return (
    <div>
        
         <input ref={inputRef} type="text" placeholder='enter nothing' />
         <button onClick={focus}>Focus</button>
    </div>
  )
}

export default Input