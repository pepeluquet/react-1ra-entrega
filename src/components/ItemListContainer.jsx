import './style.css'

function ItemListContainer({ greeting }) {
    return (
        <section className="item-list-container">
            <h1>{greeting}</h1>
            {/* futuro catálogo de productos */}
        </section>
    )
}

export default ItemListContainer