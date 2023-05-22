import { useEffect, useRef, useState } from "react"

function Timer(){
  const [time , setTime]= useState(0)
  const timerRef = useRef(null)

  useEffect(()=>{
   return stop
  },[])
 
     const start =()=>{
   
      if(timerRef.current !==null) return ;

   timerRef.current=setInterval(()=>{
      setTime((time)=> time +1)
       },1000)
     }
     const stop=()=>{
      clearInterval(timerRef.current)
      timerRef.current=null
     }
     const reset=()=>{
      stop()
      setTime(0)
     }

  return (
 <div>
   <h1>Timer</h1>
   <h2>time is: {time}</h2>
   <div>
   <button onClick={start}>START</button>
   <button onClick={stop}>STOP</button>
   <button onClick={reset}>RESET</button>
   </div>
 
 </div>
  )
}


export default Timer