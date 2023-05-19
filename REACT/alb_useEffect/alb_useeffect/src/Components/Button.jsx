import React from 'react'

const Button = ({qty}) => {
  return (
    <div style={{display: "flex"}}>
   <button>-</button>
    <button><h1>{qty}</h1></button>
   <button>+</button>

    </div>
  )
}

export default Button