import './style.css'
import { useNavigate } from 'react-router'

function Item ({ products }) {
    const navigate = useNavigate()

    return (
        <div className="col-md-4 mb-4" key={products.id}>
            <div className="card h-100">
                <img src={products.thumbnail} className="card-img-top" alt={products.title} />
                <div className="card-body">
                    <h5 className="card-title">{products.title}</h5>
                    <p className="card-text">{products.description}</p>
                    <p className="card-text"><strong>Precio: </strong>${products.price}</p>
                    <button className="btn btn-primary" onClick={() => navigate(`/item/${products.id}`)}> Ver mas </button>
                </div>
            </div>
        </div>
    )   
}

export default Item