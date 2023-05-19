import React, { useEffect, useState } from 'react'
import TodoList from './TodoList'

const Todo = () => {
 
    const [data, setData] = useState([])

    useEffect(()=>{
    const api =async ()=>{
       const data = await fetch(
        
        `https://jsonplaceholder.typicode.com/todos?&_page=1&_limit=10`
        
        )
     
        const ans = await data.json()
    
         // console.log(ans)
          setData(ans)

    }  
    api()
   
 
    },[])

console.log(data)
  return (
    <div>
    <h1>Todo:-API</h1>

    <TodoList data={data} />


    </div>
  )
}

export default Todo