import './style.css'
import CartWidget from './CartWidget'

function NavBar() {
    return (
        <nav className="navbar navbar-expand-lg">
            <div className="container-fluid">
                <a className="navbar-brand">
                    <img src="/logo.png" alt="logo" />
                </a>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarNav">
                    <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                        <li className="nav-item">
                            <a className="nav-link active" aria-current="page" href="#">Inicio</a>
                        </li>
                        <li className="nav-item dropdown">
                            <a className="nav-link dropdown-toggle" href="#" id="productosDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                Productos
                            </a>
                            <ul className="dropdown-menu" aria-labelledby="productosDropdown">
                                <li><a className="dropdown-item" href="#">Mats</a></li>
                                <li><a className="dropdown-item" href="#">Rodillos</a></li>
                                <li><a className="dropdown-item" href="#">Cintas de elongar</a></li>
                                <li><a className="dropdown-item" href="#">Pelotas</a></li>
                                <li><a className="dropdown-item" href="#">Tacos de goma</a></li>
                            </ul>
                        </li>
                    </ul>
                    <CartWidget />
                </div>
            </div>
        </nav>
    )
}

export default NavBar