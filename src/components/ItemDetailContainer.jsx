import { useState, useEffect } from "react"
import { useParams } from "react-router-dom"
import { getProductById } from "../firebase/db"
import ItemDetail from "./ItemDetail"

function ItemDetailContainer() {
    const [products, setItem] = useState()
    const { itemId } = useParams()

    useEffect(() => {
        getProductById(itemId).then(data => setItem(data))
    }, [itemId])

    return (
        <div className="container">
            <div className="row">
                <ItemDetail products={products} />
            </div>
        </div>
    )
}

export default ItemDetailContainer