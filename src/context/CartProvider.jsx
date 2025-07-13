import { CartContext } from "./CartContext"
import { useState } from "react"

function CartProvider({ children }) {
  const [cart, setCart] = useState([])

  const addToCart = () => {}

  return (
    <CartContext.Provider value={{cart}}>
      {children}
    </CartContext.Provider>
  )
}

export default CartProvider