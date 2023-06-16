import React, { useEffect } from 'react'

const useDebounce = (callback, delay) => {
 useEffect(()=> {
    
    let debounceId = setTimeout(()=> {
        callback();
    },delay)
    return ()=> {
        clearTimeout(debounceId)
    }
 },[callback,delay])
}

export default useDebounce