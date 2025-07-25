import { useState, useContext } from "react"
import { CartContext } from "../context/CartContext"
import { toast } from "react-toastify"
import "react-toastify/dist/ReactToastify.css"

function Counter({ product }) {
  const [count, setCount] = useState(1)
  const { addToCart } = useContext(CartContext)

  const handleToCart = () => {
    addToCart({id: product.id, title: product.title, price: product.price, image: product.image, quantity: count})
    toast.success("Producto agregado al carrito!", {
      position: "top-right",
      autoClose: 2000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
    })
  }

  return (
    <div className="d-flex align-items-center justify-content-center my-3">
      <button className="btn btn-outline-primary mx-3"
        onClick={() => setCount(Math.max(0, count - 1))}
      > - </button>

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