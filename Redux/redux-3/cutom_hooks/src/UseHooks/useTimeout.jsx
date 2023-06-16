import React, { useEffect, useState } from 'react'

const useTimeout = () => {
   const [ready ,setReady] = useState(false)

   useEffect(()=>{
    const timer = setTimeout(()=>{
       setReady(true)
    },3000)
    return ()=> {
        clearTimeout(timer)
       }
   })

   
    return ready
}

export default useTimeout