import React, { useEffect, useRef, useState } from 'react'

const useTimer = () => {
  const [timer, setTimer]= useState(null)
  const [watch, setWatch]= useState(0)
  
    const changeRef = useRef(null)

    const handleStart =()=> {
        if(changeRef.current){
            return 
        }
        changeRef.current = setInterval(()=> {
            setTimer((prev)=> prev +1)
        },1000)
    }
   const handleStop =()=> {
    if(changeRef.current){
        clearInterval(changeRef.current)
        changeRef.current = null 
    }
   }

   const handleReset =()=> {
    handleStop()
    setTimer(0)
   }


  useEffect(()=> {
  return handleStop
  },[])

  return{timer,handleStop, handleStart, handleReset}

}

export default useTimer