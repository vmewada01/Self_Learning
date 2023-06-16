import React from 'react'
import { Link } from 'react-router-dom'

const Navbar = () => {
  return (
    <div style={{display:"flex" , gap:"2rem" , justifyContent:"center"}}>
  
     <Link to="/">Home</Link>
     <Link to="/products">Products</Link>
     <Link to="/products_page">Products Page</Link>
    </div>
  )
}

export default Navbar