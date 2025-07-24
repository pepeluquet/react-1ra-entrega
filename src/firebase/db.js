import { getFirestore,
     collection, 
     getDocs, 
     query, 
     where, 
     doc, 
     getDoc,
     addDoc
    } from "firebase/firestore"
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

export const fetchCategories = async (category) => {
    const q = query(collection(db, "Pruducts"), where("category", "==", category))
    const querySnapshot = await getDocs(q)
    const products = []

    querySnapshot.forEach((doc) => {
        products.push({ id: doc.id, ...doc.data() })
    })
    return products
}

export const getProductById = async (itemId) => {
    const docRef = doc(db, "Products", itemId);
    const docSnap = await getDoc(docRef);

    if (docSnap.exists()) {
        return { id: docSnap.id, ...docSnap.data() }
    } else {
        throw new Error("No such document!");
    }
}

export const createOrder = async (order) => {
    const docRef = await addDoc(collection(db, "orders"), order);
}