import './style.css'
import CartWidget from './CartWidget'

function NavBar() {
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
      <div className="container-fluid">
        {/* Logo y nombre de la tienda */}
        <a className="navbar-brand d-flex align-items-center" href="#">
          <img src="/logo.png" alt="Logo" width="40" height="40" className="d-inline-block align-text-top me-2" />
          InaYoga
        </a>
        {/* Botón hamburguesa para mobile */}
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav"
          aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        {/* Enlaces de navegación */}
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <a className="nav-link active" aria-current="page" href="#">Inicio</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">Productos</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">Contacto</a>
            </li>
          </ul>
          {/* Widget del carrito alineado a la derecha */}
          <CartWidget />
        </div>
      </div>
    </nav>
  )
}

export default NavBar