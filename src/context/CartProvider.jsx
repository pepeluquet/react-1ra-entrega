import { useState } from "react"
import { CartContext } from "./CartContext"
import { toast } from "react-toastify"
import "react-toastify/dist/ReactToastify.css"

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
    toast.info("Producto eliminado del carrito", {
      position: "top-right",
      autoClose: 2000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
    })
  }

  const clearCart = () => { 
    setCart([])
    toast.info("Carrito vaciado", {
      position: "top-right",
      autoClose: 2000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
    })
  }

  const getQuantity = () => cart.reduce((acc, item) => acc + item.quantity, 0)

  return (
    <CartContext.Provider value={{ cart, setCart, getQuantity, addToCart, removeItem, clearCart }}>
      {children}
    </CartContext.Provider>
  )
}

export default CartProvider