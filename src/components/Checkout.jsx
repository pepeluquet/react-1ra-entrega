import { useContext } from "react"
import { useNavigate } from "react-router"
import { serverTimestamp } from "firebase/firestore"
import { CartContext } from "../context/CartContext"
import { createOrder } from "../firebase/db"
import Swal from 'sweetalert2'
import CheckoutForm from "./CheckoutForm"

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

    return <CheckoutForm handleSubmit={handleSubmit} />
}

export default Checkout