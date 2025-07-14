import { getFirestore, collection, getDocs } from "firebase/firestore"
import { app } from "./configuracion"

const db = getFirestore(app)

export const fetchProducts = async () => {
    const querySnapshot = await getDocs(collection(db, "Products"))
    const products = []
    querySnapshot.forEach((doc) => {
        products.push({ id: doc.id, ...doc.data() })
    })
    return products
}

