import React from 'react'

const Child1 = ({info,setInfo}) => {
    const onHandleChange =(e) => {
        let newValue =e.target.value;
       setInfo(newValue);
    }
  return (
    <div>
   <input onChange={onHandleChange}/>
   Child1:{info}

    </div>
  )
}

export default Child1