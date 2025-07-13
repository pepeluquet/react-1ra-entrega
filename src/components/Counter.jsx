import { useState, useContext } from "react"
import { CartContext } from "../context/CartContext"

function Counter({ product }) {
  const [count, setCount] = useState(0)
  const { addToCart } = useContext(CartContext)

  const handleToCart = () => {
    addToCart({id: product.id, title: product.title, price: product.price, quantity: count})
  }

  return (
    <div className="d-flex align-items-center justify-content-center my-3">
      <button className="btn btn-outline-primary mx-3"
        onClick={() => setCount(count - 1)} > - </button>
      <span className="mx-2 fs-5">{count}</span>
      <button className="btn btn-outline-primary mx-3"
        onClick={() => setCount(count + 1)} > + </button>
      <button className="btn btn-primary"
        onClick={handleToCart} disabled={count === 0}>
        Agregar al carrito
      </button>
    </div>
  )
}

export default Counter