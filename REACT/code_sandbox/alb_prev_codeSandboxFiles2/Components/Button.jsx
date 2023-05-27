import React from "react"


function Button(){
 
  const press=()=>{
    alert("You Clicked Vishal")
  }

  return (
   
    <div>
      <button onClick={press}>Vishal</button>
    </div>

  )
}

export default Button