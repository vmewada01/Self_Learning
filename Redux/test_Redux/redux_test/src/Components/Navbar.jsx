import React from 'react'

const Navbar = () => {
  return (
    <div style={{display:"flex",border:"1px solid black", justifyContent: "space-between"}}>
        <div>Navbar</div>
        <div><button style={{backgroundColor:"black", color:"white"}}>Login</button></div>
    </div>
  )
}

export default Navbar