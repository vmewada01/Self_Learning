import React, { forwardRef } from 'react'

const PinInput =forwardRef(({singleInputHandler,isOtpValid, onBackspaceHandler}, ref) => {
 
     const handleKeyUp = (e, index)=> {
        if(e.keyCode===8 && !e.target.value){
            onBackspaceHandler(e)
        }
        else{
            singleInputHandler(e, index)
        }
     }

  return (
    <input 
    className={isOtpValid ? "setOtp":""}
    ref={ref}
    maxLength={1}
    onKeyUp={handleKeyUp}
    isOtpValid={true}
  />
  )
})

export default PinInput