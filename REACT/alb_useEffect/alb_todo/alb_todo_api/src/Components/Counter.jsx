import React, { useEffect, useState } from 'react'

const Counter = () => {
 const [count, setCount] = useState(0)

    useEffect(()=>{
        console.log(`count is get updated`)
        document.title =`Clicked${count} times`
    },[count])

  return (
    <div>
        <h1>Counter Application</h1>

     <h2> Count : {count}</h2>
     <button onClick={()=> setCount(count+1)}>Increment</button>
    </div>
  )
}

export default Counter