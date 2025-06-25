import { useState , useEffect } from "react"
import { useParams } from "react-router"
import ItemList from "./ItemList"
import withLog from "../hoc/withLog"

const ItemListWithLog = withLog(ItemList)

function ItemListContainer() {
    const [items, setItems] = useState([])
    const { categoryName } = useParams()

    useEffect(() => {
        if (categoryName) {
            fetch(`https://dummyjson.com/products/category/${categoryName}`)
                .then(res => res.json())
                .then(data => setItems(data.products))
        } else {
            fetch('https://dummyjson.com/products')
                .then(res => res.json())
                .then(data => setItems(data.products))   
        } 
    }, [categoryName])

    return (
        <ItemListWithLog items={items} />
    )
}

export default ItemListContainer