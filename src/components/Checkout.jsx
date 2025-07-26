import { useContext } from "react"
import { useNavigate } from "react-router"
import { serverTimestamp } from "firebase/firestore"
import { CartContext } from "../context/CartContext"
import { createOrder } from "../firebase/db"
import Swal from 'sweetalert2'

function Checkout() {
    const { cart, clearCart } = useContext(CartContext)
    const navigate = useNavigate()

    const handleSubmit = async (e) => {
        e.preventDefault()
        const form = e.target
        const nombre = form.nombre.value
        const apellido = form.apellido.value
        const email = form.email.value
        const telefono = form.telefono.value
        const direccion = form.direccion.value

        const total = cart.reduce((acum, item) => acum + item.price * item.quantity, 0)
               
        const orden = {
            client: { nombre, apellido, email, telefono, direccion },
            items: cart,
            time: serverTimestamp(),
            total: total
        }
        const docRef = await createOrder(orden)
        Swal.fire({
          icon: 'success',
          title: '¡Gracias por tu compra!',
          html: `
            <p>Tu orden fue registrada correctamente.</p>
            <p><strong>Número de orden:</strong> <span style="color: #198754;">${docRef.id}</span></p>
            <p>En breve recibirás un correo con los detalles de tu compra.</p>
            <hr>
            <p class="mb-0">¡Namasté! 🧘‍♂️</p>
          `,
          confirmButtonText: 'Aceptar'
        })
        clearCart()
        navigate("/")
    }

    return (
        <div className="container my-5">
            <h2 className="mb-4">Checkout</h2>
            <form className="row g-3" onSubmit={handleSubmit}>
                <div className="col-md-6">
                    <label htmlFor="nombre" className="form-label">Nombre</label>
                    <input type="text" className="form-control" id="nombre" placeholder="Tu nombre" required />
                </div>
                <div className="col-md-6">
                    <label htmlFor="apellido" className="form-label">Apellido</label>
                    <input type="text" className="form-control" id="apellido" placeholder="Tu apellido" required />
                </div>
                <div className="col-md-6">
                    <label htmlFor="email" className="form-label">Email</label>
                    <input type="email" className="form-control" id="email" placeholder="ejemplo@email.com" required />
                </div>
                <div className="col-md-6">
                    <label htmlFor="telefono" className="form-label">Teléfono</label>
                    <input type="tel" className="form-control" id="telefono" placeholder="Tu teléfono" required />
                </div>
                <div className="col-12">
                    <label htmlFor="direccion" className="form-label">Dirección</label>
                    <input type="text" className="form-control" id="direccion" placeholder="Calle, número, ciudad" required />
                </div>
                <div className="col-12 d-flex justify-content-end">
                    <button type="submit" className="btn btn-success btn-lg mt-3">Finalizar compra</button>
                </div>
            </form>
        </div>
    )
}

export default Checkout