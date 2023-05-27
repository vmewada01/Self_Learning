import React, { useState } from "react"

function Counter(){
  const [count, setCount] = useState(0)
  const increase =()=>{
    setCount(count+1)
  }
  const decrease =()=>{
    setCount(count-1)
  }

   return (
     <div>
     <h1>Count is : {count}</h1>
     <button onClick={increase}>Increment</button>
     <button onClick={decrease}>Decrement</button>
     </div>

   )

}

export default Counter