import { useState, useEffect } from "react"
import { useParams } from "react-router-dom"


function ItemDetailContainer() {
    const [products, setItem] = useState()
    const { itemId } = useParams()
    console.log(itemId)

    useEffect(() => {
        fetch(`https://dummyjson.com/products/${itemId}`)
            .then(res => res.json())
            .then(data => setItem(data))
    }, [itemId])

    return (
        <div className="col-md-4 mb-4" key={products?.id}>
            <img src={products?.thumbnail} className="card-img-top" alt={products?.title} />
            <div className="card-body">
                <h5 className="card-title">{products?.title}</h5>
                <p className="card-text">{products?.description}</p>
                <p className="card-text"><strong>Precio: </strong>${products?.price}</p>
                
            </div>
        </div>
    )
}

export default ItemDetailContainer