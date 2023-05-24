import React from 'react'

const Form = () => {
  return (
    <div style={{display:"flex", flexDirection:"column", justifyContent:"center", margin:"auto" , alignContent:"center", alignItems:"center"}}>
     <h1>Form</h1>
     <div>
        <input type="text" placeholder='enter name....' />

     </div>
     <div>
        <input type="text" placeholder='enter email....' />
        
     </div>
     <div>
        <input type="text" placeholder='enter password.....' />
        
     </div>
     <div>
        <input type="text" placeholder='enter roll no....' />
        
     </div>
     <div>
        <input type="text" placeholder='enter salary....' />
        
     </div>
     <div>
        <button>Submit</button>
     </div>

    </div>
  )
}

export default Form