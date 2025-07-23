import { useContext } from 'react'
import { CartContext } from '../context/CartContext'
import { useNavigate } from 'react-router'

function Cart() {
    const { cart, removeItem, clearCart } = useContext(CartContext)
    const navigate = useNavigate()

    const total = cart.reduce((acum, item) => acum + item.price * item.quantity, 0)

    if (cart.length === 0) {
        return (
            <div className="container my-5">
                <h2>Carrito de Compras</h2>
                <p>No hay productos en el carrito.</p>
            </div>
        )
    }

    return (
        <div className="container my-5">
            <h2 className="mb-4">Carrito de Compras</h2>
            {cart.map(item => (
                <div className="mb-3" key={item.id}>
                    <div className="card h-100">
                        <div className="card-body d-flex flex-column flex-md-row align-items-md-center justify-content-between">
                            {console.log(item)}
                            <img
                                src={item.image}
                                alt={item.title}
                                style={{ width: "80px", height: "80px", objectFit: "cover" }}
                                className="me-3 rounded"
                            />
                            <div className="flex-grow-1">
                                <h5 className="card-title">{item.title}</h5>
                                <p className="card-text mb-1">Precio: ${item.price}</p>
                                <p className="card-text mb-1">Cantidad: {item.quantity}</p>
                            </div>
                            <div className="d-flex align-items-center gap-3 mt-3 mt-md-0">
                                <span className="fw-bold">Subtotal: ${(item.price * item.quantity).toFixed(2)}</span>
                                <button className="btn btn-outline-danger" onClick={() => removeItem(item.id)}>
                                    Eliminar producto
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            ))}
            <button className="btn btn-danger mb-3" onClick={clearCart}>Vaciar carrito</button>
            <div className="alert alert-success mt-4 fs-5">
                <strong>Total de la compra: ${total.toFixed(2)}</strong>
            </div>
            <div className="d-flex justify-content-end mt-3">
                <button className="btn btn-success btn-lg" onClick={() => navigate('/checkout')} > Ir al Checkout</button>
            </div>
        </div>
    )
}

export default Cart