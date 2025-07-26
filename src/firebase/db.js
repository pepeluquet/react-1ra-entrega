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

export const fetchCategories = async () => {
    const querySnapshot = await getDocs(collection(db, "Products"))
    const categoriesSet = new Set()
    querySnapshot.forEach(doc => {
        const data = doc.data()
        if (data.category) {
            categoriesSet.add(data.category)
        }
    })
    return Array.from(categoriesSet)
}

export const fetchProductsByCategory = async (category) => {
    const q = query(collection(db, "Products"), where("category", "==", category))
    const querySnapshot = await getDocs(q)
    const products = []
    querySnapshot.forEach(doc => {
        products.push({ id: doc.id, ...doc.data() })
    })
    return products
}

export const getProductById = async (itemId) => {
    const docRef = doc(db, "Products", itemId);
    const docSnap = await getDoc(docRef);

    if (docSnap.exists()) {
        return { id: docSnap.id, ...docSnap.data() }
    } 
}

export const createOrder = async (order) => {
    const docRef = await addDoc(collection(db, "orders"), order)
    console.log("Order creada con ID: ", docRef.id)
    return docRef
}

