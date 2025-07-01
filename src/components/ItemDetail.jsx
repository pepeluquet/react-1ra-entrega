import './style.css'
import Counter from "./Counter"

function ItemDetail({ products }) {
    return (    
        <div className="container">
            <div className="row">
                <div className="col-md-6">
                    <img src={products?.thumbnail} className="img-fluid" alt={products?.title} />
                </div>
                <div className="col-md-6">
                    <h2>{products?.title}</h2>
                    <p>{products?.description}</p>
                    <p><strong>Precio: </strong>${products?.price}</p>
                    <Counter item={products} />
                </div>
            </div>
        </div>
    )
}

export default ItemDetail