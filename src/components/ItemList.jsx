import './style.css'



function ItemList ({ items }) {
    const url = "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR8XrhLyS27VcGV-Y1mtslpqKFBQjMFwXJ-AnoYtXRcNmCuHf4jcjts2Ug&s";
    return (        
        <section className="item-list-container">
            <h1>Lista de Productos</h1>
            <div className="container">
                <div className="row">
                    {items.map((producto) => (
                        <div className="col-md-4 mb-4" key={producto.id}>
                            <div className="card h-100">
                                <img src={url} className="card-img-top" alt={producto.nombre} />
                                <div className="card-body">
                                    <h5 className="card-title">{producto.nombre}</h5>
                                    <p className="card-text">{producto.descripcion}</p>
                                    <p className="card-text"><strong>Precio: </strong>${producto.precio}</p>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>)
}

export default ItemList