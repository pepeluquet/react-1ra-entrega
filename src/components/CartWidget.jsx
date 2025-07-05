import { useContext } from 'react'
import { CartContext } from '../context/CartContext'
import { useNavigate } from 'react-router'

function CartWidget() {
    const { getQuantity } = useContext(CartContext)
    const quantity = getQuantity()
    const navigate = useNavigate()

    return (
        <button className="btn btn-outline-success position-relative" onClick={() => navigate('/cart')}>
            <i className="fas fa-shopping-cart"></i>
            <span className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger">
                {quantity > 0 ? quantity : '0'}
            </span>
        </button>
    )
}

export default CartWidget