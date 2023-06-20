import React, { useState } from 'react'
import Header from './Header'
import Button from './Button'

const Counter = () => {
  const [counter ,setCounter] = useState<number>(0)

  const handleClick =(value: number)=> {
     setCounter(counter + value)
  }


  return (
    <div>
   <Header label={"Counter"} />
   <Header label={`${counter}`} />
   <Header>
    <div>First Child Div</div>
    <div>First Child Div</div>
    <div>First Child Div</div>
   </Header>
   <Button label="Add" handleClick={()=> handleClick(1)} />
   <Button label="Substract"  handleClick={()=> handleClick(-1)} />
    </div>
  )
}

export default Counter