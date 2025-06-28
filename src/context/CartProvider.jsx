import { CartContext } from "./CartContext"

function CartProvider({ children }) {
  return (
    <CartContext.Provider value={{}}>
      {children}
    </CartContext.Provider>
  )
}

export default CartProvider