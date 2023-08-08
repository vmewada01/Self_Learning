import React from 'react'
interface ButtonProps{
    label : String,
}

const Button = ({label}:ButtonProps) => {
  return (
   <>
   <button>{label}</button>
   </>
  )
}

export default Button