import './style.css'
import Item from './Item'

function ItemList ({ items }) {
    
    return (        
        <section className="item-list-container">
            <div className="container">
                <div className="row">
                    {items.map((products) => (
                        <div className="col-md-4 mb-4" key={products.id}>
                            <Item products={products} />
                        </div>
                    ))}
                </div>
            </div>
        </section>)
}

export default ItemList