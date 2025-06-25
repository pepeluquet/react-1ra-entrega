import { useState , useEffect } from "react"
import { useParams } from "react-router"
import ItemList from "./ItemList"
import withLog from "../hoc/withLog"

const ItemListWithLog = withLog(ItemList)

function ItemListContainer() {
    const [items, setItems] = useState([])
    const { categoryName } = useParams()

    useEffect(() => {
        const url = 'https://dummyjson.com/products'
        const urlCategory = `https://dummyjson.com/products/category/${categoryName}`

        fetch(categoryName ? urlCategory : url)
            .then(res => res.json())
            .then(data => setItems(data.products))
    }, [categoryName])

    return (
        <ItemListWithLog items={items} />
    )
}

export default ItemListContainer