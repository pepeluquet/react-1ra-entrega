import { initializeApp } from "firebase/app"
import { getAnalytics } from "firebase/analytics"

const firebaseConfig = {
  apiKey: "AIzaSyD4wEcP3943fYamyBSXVK1eOYXS8XePixA",
  authDomain: "inayoga-db.firebaseapp.com",
  projectId: "inayoga-db",
  storageBucket: "inayoga-db.firebasestorage.app",
  messagingSenderId: "215249587076",
  appId: "1:215249587076:web:73691a2bad5b9bbeb7abd1",
  measurementId: "G-K87DX33QEV"
}

export const app = initializeApp(firebaseConfig)
export const analytics = getAnalytics(app)