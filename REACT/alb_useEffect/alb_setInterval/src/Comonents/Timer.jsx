import { useEffect, useState } from "react"

function Timer(){

const [count, setCount] = useState(0)

   useEffect(()=>{
     console.log(`component is Mounting ${count}:`, Date.now()  )
   const id=  setInterval(()=>{
      setCount(count +1)
       
     },1000)
 
     const cleanup = ()=>{
       clearInterval(id)
       console.log(`unMount ${count}`)
     }
   


   },[count])


  return (
    <div>
     <h1> Timer application </h1>


     <h2> Count : {count}</h2>
     <h2> update every second</h2>




    </div>
  )
}

export default Timer