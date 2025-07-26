import './style.css'
import CartWidget from './CartWidget'
import { useEffect, useState } from 'react'
import { NavLink } from 'react-router'
import { fetchCategories } from '../firebase/db'

function NavBar() {
    const [categories, setCategories] = useState([])

    useEffect(() => {
        fetchCategories().then(data => setCategories(data))
    }, [])

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
                            <NavLink className="nav-link active" aria-current="page" to="/">Inicio</NavLink>
                        </li>
                        <li className="nav-item dropdown">
                            <a className="nav-link dropdown-toggle" href="#" id="productosDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                Productos
                            </a>
                            <ul className="dropdown-menu" aria-labelledby="productosDropdown">
                                {categories.map(category => (
                                    <li key={category}>
                                        <NavLink className="dropdown-item" to={`/categoria/${category}`}>{category}</NavLink>
                                    </li>
                                ))}
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