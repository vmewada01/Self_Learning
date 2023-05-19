import React from 'react'

const Quantity = ({qty, chngCount, id}) => {
  return (
    <div  style={{display:"flex" , gap:"1rem", border:"1px solid tomato"}}>

 <button style={{backgroundColor: "tomato"}}  onClick={()=>chngCount(id, +1)}>+</button>
 <div><h4>{qty}</h4></div>
 <button style={{backgroundColor: "tomato"}} disabled={qty===0} onClick={()=>chngCount(id,-1)}>-</button>

    </div>
  )
}

export default Quantity