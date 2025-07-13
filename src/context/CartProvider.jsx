import { CartContext } from "./CartContext"
import { useState } from "react"

function CartProvider({ children }) {
  return (
    <CartContext.Provider value={{}}>
      {children}
    </CartContext.Provider>
  )
}

export default CartProvider