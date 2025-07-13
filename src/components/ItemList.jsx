import './style.css'
import Item from './Item'

function ItemList ({ items }) {
    
    return (        
        <section className="item-list-container">
            <div className="container">
                <div className="row">
                    {items.map((products) => (
                        <Item key={products.id} products={products} />
                    ))}
                </div>
            </div>
        </section>)
}

export default ItemList