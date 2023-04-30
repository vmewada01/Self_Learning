import React, { useContext } from 'react'
import { Cartcontext } from '../context/CartContext'

const Cart = () => {
 const {count, setCount} = useContext(Cartcontext)

  return (
    <div>Cart
        <button onClick={()=> setCount(count +1)}>add to cart</button>
    </div>
  )
}

export default Cart