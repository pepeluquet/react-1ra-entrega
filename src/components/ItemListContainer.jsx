import { useState , useEffect } from "react"
import ItemList from "./ItemList"
import withLog from "../hoc/withLog"

const ItemListWithLog = withLog(ItemList)

function ItemListContainer() {
    const [items, setItems] = useState([])

    useEffect(() => {
      fetch('https://dummyjson.com/products')
        .then(res => res.json())
        .then(data => setItems(data.products))   
    }, [])

    return (
        <ItemListWithLog items={items} />
    )
}

export default ItemListContainer