import './style.css'
import CartWidget from './CartWidget'

function NavBar() {
    return (
        <nav className="navbar">
        {/* Logo de la tienda */}
        <div className="navbar-logo">
            <img src="/logo.png" alt="Logo" />
        </div>
        {/* Enlaces de navegación */}
        <ul className="navbar-links">
            <li><a href="#">Inicio</a></li>
            <li><a href="#">Productos</a></li>
            <li><a href="#">Contacto</a></li>
        </ul>
        {/* Widget del carrito */}
        <CartWidget />
    </nav>
  )
}

export default NavBar