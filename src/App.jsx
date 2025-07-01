import './App.css'
import NavBar from './components/NavBar'
import ItemListContainer from './components/ItemListContainer'
import ItemDetailContainer from './components/ItemDetailContainer'
import Counter from './components/Counter'
import { BrowserRouter, Routes, Route } from "react-router"

function App() {
    return (
        <BrowserRouter>
            <NavBar />
            <Routes>
                <Route path="/" element={<section className="nucleo">
                                            <h1>¡Bienvenidos a InaYoga!</h1>
                                            <p>Tu tienda de productos de yoga y bienestar</p>
                                            <ItemListContainer />
                                            <Counter />
                                        </section>} />
                <Route path="/categoria/:categoryName" element={<section className="nucleo">
                                            <h1>¡Bienvenidos a InaYoga!</h1>
                                            <p>Tu tienda de productos de yoga y bienestar</p>
                                            <ItemListContainer />
                                            <Counter />
                                        </section>} />
                <Route path="/item/:itemId" element={<section className="nucleo">
                                            <h1>¡Bienvenidos a InaYoga!</h1>
                                            <ItemDetailContainer />
                                        </section>} />
            </Routes>
            
            <footer className="final">
                © 2025 InaYoga - Todos los derechos reservados
            </footer>
        </BrowserRouter>
    )
}

export default App
