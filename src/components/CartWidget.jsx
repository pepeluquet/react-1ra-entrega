function CartWidget({ count = 1 }) {
  return (
    <button className="btn btn-outline-success position-relative">
      {/* Ícono Font Awesome, si tienes el CDN, si no, sigue usando 🛒 */}
      <i className="fas fa-shopping-cart"></i>
      <span className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger">
        {count}
        <span className="visually-hidden">productos en el carrito</span>
      </span>
    </button>
  )
}

export default CartWidget