import React from 'react'

const List = (props) => {
  
  return (
<>
 <div className='list_style'>
  <div className='display'>
    <input
     type="radio"
     className='radio'
     name='radio'
     onChange={()=>{
        alert("Task Completed")
     }}
   
    />
    <li>{props.text}</li>
    <button className='btn2'
    onClick={() => {
        props.onSelect(props.id);
    }}
    >

        X
    </button>
  </div>




 </div>


</>
  )
}

export default List