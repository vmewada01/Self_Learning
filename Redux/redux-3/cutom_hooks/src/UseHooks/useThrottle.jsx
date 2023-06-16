import React, { useEffect, useRef } from 'react'

const useThrottle = (func,delay) => {
 const throlledId = useRef(false)
 useEffect(()=> {
    if(!throlledId.current){
        throlledId.current = true ;
        setTimeout(()=> {
            func();
            throlledId.current = false ;
        },delay)
    }
 },[func, delay])
}

export default useThrottle