import React, { useState } from 'react'
import Button from './Button'

const TodoInput = () => {
 const [input, setInput]= useState<>String</>("")


  return (
    <div>
     <input type="text" placeholder='enter something here....' />
     <Button label={'ADD_ITEM'} />
    

    </div>
  )
}

export default TodoInput