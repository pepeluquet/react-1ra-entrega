import './style.css'

function ItemList ({ items }) {
    
    return (        
        <section className="item-list-container">
            <h1>Lista de Productos</h1>
            <div className="container">
                <div className="row">
                    {items.map((products) => (
                        <div className="col-md-4 mb-4" key={products.id}>
                            <div className="card h-100">
                                <img src={products.thumbnail} className="card-img-top" alt={products.title} />
                                <div className="card-body">
                                    <h5 className="card-title">{products.title}</h5>
                                    <p className="card-text">{products.description}</p>
                                    <p className="card-text"><strong>Precio: </strong>${products.price}</p>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>)
}

export default ItemList