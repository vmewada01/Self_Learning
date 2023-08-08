import React from 'react'
interface HeaderProps{
label: String,
}

const Todo = ({label}:HeaderProps ) => {
  return (
    <div>{label}</div>
  )
}

export default Todo