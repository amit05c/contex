import React from 'react'
 import { useContext } from 'react'
 import {CartContext } from "../contex/CartContext"

const Wishlist = () => {
   const { count }= useContext(CartContext)
  //  console.log(count)
  return (
    
    <div>Wishlist:{count} </div>
  )
}

export default Wishlist