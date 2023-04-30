import React, { useContext } from 'react'
import Product from './Product'
import { AuthContext } from '../context/AuthContext'
import Cart from './Cart';

const Products = () => {
    const {isAuthorized}= useContext(AuthContext);
  return (
 <div>
 Products : {isAuthorized ? "LoggoedIN " : "LoggedOut"}
   <Cart/>
 </div>

      

  )
}

export default Products