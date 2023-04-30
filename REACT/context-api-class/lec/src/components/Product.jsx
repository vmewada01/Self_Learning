import React, { useContext } from 'react'
import Cart from './Cart'
import { AuthContext } from '../context/AuthContext'

const Product = () => {
const {isAuthorized}= useContext(AuthContext)
 
  return (

<>
Product : {isAuthorized ? "LogIn" : "Logout"}
<Cart/>
</>

    
   
  )
}

export default Product