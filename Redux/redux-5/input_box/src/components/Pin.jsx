import React, { useEffect, useRef, useState } from "react";
import Proptypes from "prop-types";
import PinInput from "./PinInput";

const Pin = ({ length, setOtp, isOtpValid }) => {
  const [inputBoxLength] = useState(new Array(length).fill(1));
  const [inputData] = useState(new Array(length).fill(""));
  const inputRef = useRef([]);

  const changeHandler = (e, index) => {
    inputData[index] = e.target.value;

    //console.log(e.target.value)
    if (e.target.value.length > 0 && index < length - 1) {
      inputRef.current[index + 1].focus();
    }
    setOtp(inputData.join(""));
  };

  const handlBackspace = (e, index) => {
    if (index > 0) {
      inputRef.current[index - 1].focus();
    }
    inputData[index] = e.target.value;

    setOtp(inputData.join(""));
  };

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
      {inputBoxLength.map((_, index) => {
        return (
          <PinInput
            ref={(HTMLElement) => {
              inputRef.current[index] = HTMLElement;
            }}
            isOtpValid={isOtpValid}
            key={index}
            singleInputHandler={(e) => changeHandler(e, index)}
            onBackspaceHandler={(e) => handlBackspace(e, index)}
          />
        );
      })}
    </div>
  );
};

export default Pin;

Pin.propTypes = {
  length: Proptypes.number.isRequired,
  setOtp: Proptypes.func,
};
