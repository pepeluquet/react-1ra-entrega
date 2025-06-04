import './App.css'
import NavBar from './components/NavBar'
import ItemListContainer from './components/ItemListContainer'

function App() {
    return (
        <div className="grid-container">
            <NavBar />
            <main className="portada">
                {/* Aquí puedes poner un banner o portada */}
            </main>
            <section className="nucleo">
                <ItemListContainer titulo="¡Bienvenidos! Tienda InaYoga" />
            </section>
            <footer className="final">
                {/* Pie de página */}
            </footer>
        </div>
    )
}

export default App
