function ItemList ({ items }) {
    return (        
        <section className="item-list-container">
            <h1>Lista de Productos</h1>
            {items.map(producto => (
                <div key={producto.id} className="item">
                    <h2>{producto.nombre}</h2>
                    <p>{producto.descripcion}</p>
                    <p>Precio: ${producto.precio}</p>
                </div>
            ))}
        </section>)
}

export default ItemList