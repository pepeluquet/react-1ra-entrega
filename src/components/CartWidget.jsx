function CartWidget({ contador = 0 }) {
    return (
        <button className="btn btn-outline-success position-relative">
            <i className="fas fa-shopping-cart"></i>
            <span className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger">
                {contador}
            </span>
        </button>
    )
}

export default CartWidget