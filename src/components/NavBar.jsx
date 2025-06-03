import './style.css'
import CartWidget from './CartWidget'

function NavBar() {
  return (
    <nav className="navbar" style={{ gridArea: "navbar" }}>
      <div className="navbar-logo">
        <img src="/logo.png" alt="Logo" />
      </div>
      <ul className="navbar-links">
        <li><a href="#">Inicio</a></li>
        <li><a href="#">Productos</a></li>
        <li><a href="#">Contacto</a></li>
      </ul>
      <CartWidget />
    </nav>
  )
}

export default NavBar