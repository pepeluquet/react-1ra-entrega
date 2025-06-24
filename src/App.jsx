import './App.css'
import NavBar from './components/NavBar'
import ItemListContainer from './components/ItemListContainer'
import Counter from './components/Counter'
import { BrowserRouter, Routes, Route } from "react-router"

function App() {
    return (
        <BrowserRouter>
            <NavBar />
            <Routes>
                <Route path="/" element={<section className="nucleo">
                                            <ItemListContainer titulo="¡Bienvenidos! Tienda InaYoga" />
                                            <Counter />
                                        </section>} />
            </Routes>

        </BrowserRouter>
    )
}

export default App
