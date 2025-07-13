import { useState } from "react"
import { CartContext } from "./CartContext"

const CartProvider = ({ children }) => {
  const [cart, setCart] = useState([])

  const addToCart = (item) => {
    const existingItem = cart.find(cartItem => cartItem.id === item.id)
    if (existingItem) {
      setCart(cart.map(cartItem => 
        cartItem.id === item.id 
          ? { ...cartItem, quantity: cartItem.quantity + item.quantity } 
          : cartItem
      ))
    } else {
      setCart([...cart, { ...item, quantity: item.quantity }])
    }
  }

  const removeItem = (id) => {
    setCart(cart.filter(item => item.id !== id))
  }

  const clearCart = () => setCart([])

  const getQuantity = () => cart.reduce((acc, item) => acc + item.quantity, 0)

  return (
    <CartContext.Provider value={{ cart, setCart, getQuantity, addToCart, removeItem, clearCart }}>
      {children}
    </CartContext.Provider>
  )
}

export default CartProvider