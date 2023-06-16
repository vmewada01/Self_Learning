import { useEffect, useState } from "react"

function SecondWay(){
 
 const [count, setCount] = useState(0)
 

  const setId = ()=>{
   // console.log(count)
    setInterval(()=>{
     // console.log(`compoent get mount ${count}`)
       setCount((prev)=> prev +1)
    },1000)
 

    const cleanup = ()=>{
      clearInterval(setId)
    }
    return cleanup 

  }

  useEffect(()=>{
     setId()
  },[])



  return (
       <div>
         <h1>second One </h1>
      <div>second Timer Applicaiton </div>

      <h3> second Count : {count}</h3>

       </div>
  )
}


export default SecondWay