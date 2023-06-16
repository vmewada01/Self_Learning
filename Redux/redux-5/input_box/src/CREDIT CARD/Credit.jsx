import React, { useRef, useState } from 'react'
import Proptypes from "prop-types";



const Credit = ({setCreditPin, length}) => {
  const [inputBoxLength] = useState(new Array(length).fill(1))
 const [inputData]= useState(new Array(length).fill(""))
   const inputRef = useRef([])
 
   const ChangeHandler = (e,index)=> {
    inputData[index]= e.target.value;
     console.log(inputData)
 
    if(e.target.value.length> 0 && index < length-1 ){
      inputRef.current[index +1].focus();
    }
    setCreditPin(inputData.join(""))
   }
  const handleBackspace=(e,index)=> {
    if(index > 0){
      inputRef.current[index -1].focus();
    inputData[index]= e.target.value
   setCreditPin(inputData.join("")) 
  }
  }

  const handleKeyUp = (e, index)=> {
    if(e.keyCode===8 && !e.target.value){
      handleBackspace(e)
    }
    else{
      ChangeHandler(e, index)
    }
 }

 const handlePasteContent=(e)=> {
  const data = e.clipboardData.getData("text").split("").filter((_,index)=> index< length);

  data.forEach((item,index)=> {
    inputData[index]= item
    inputRef.current[index].value = item

    if(index<length-1){
      inputRef.current[index+1].focus();
    }


  });

  
}



  return (
    <div onPaste={handlePasteContent}>
      {inputBoxLength.map((_,index)=> {
        return (
        
            <input
            maxLength={1}
            onKeyUp={handleKeyUp}
            key={index}
            ref={(HTMLelement)=> {inputRef.current[index] =HTMLelement}}
            onChange={(e)=> ChangeHandler(e)}
           onBackspaceHandler={(e)=> handleBackspace(e,index)}
            />
           )
      })}
    </div>
  )
}

export default Credit

Credit.propTypes ={
  length: Proptypes.number.isRequired,
  setCreditPin: Proptypes.func,
}