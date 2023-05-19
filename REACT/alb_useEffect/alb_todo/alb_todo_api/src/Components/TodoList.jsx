import React from 'react'
import TodoItem from './TodoItem'

const TodoList = ({data}) => {
  return (
    <div >
        <TodoItem data={data} />
    </div>
  )
}

export default TodoList