import React, { useMemo } from 'react'

const expensiveOperation =(ms)=> {
    const start = Date.now()
    while(Date.now()-start <ms){
     continue;
    }
    return true;
 }
const TodoInput = ({id,title,status, handleToggle, handleDelete}) => {
  const isDone = useMemo(()=> expensiveOperation(200),[])

  return (
    <div style={{display: "flex" , justifyContent: "center", gap:"1rem"}}>
    <div>{title}</div>
    <div>{status? "True": "False"}</div>
    <button onClick={()=> handleToggle(id)}>Toggle</button>
    <button onClick={()=> handleDelete(id)}>Delete</button>
    {/* <div style={{border: "1px solid black", backgroundColor:"red"}}>box</div> */}
    </div>
  )
}

// const shallowEqual=(previousValue, currentValue)=>{
//     return (
//         previousValue.id===currentValue.id && previousValue.status===currentValue.status
//     )

// }

export default React.memo(TodoInput )