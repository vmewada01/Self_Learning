import React, { useContext } from 'react'
import { Cartcontext } from '../context/CartContext'

const Wishlist = () => {
 

   const {count, setCount} = useContext(Cartcontext);
   return <div>WishList: {count}</div>
}

export default Wishlist