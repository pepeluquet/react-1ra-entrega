import { useState , useEffect } from "react"
import { useParams } from "react-router"
import ItemList from "./ItemList"
import withLog from "../hoc/withLog"
import { fetchProducts, fetchProductsByCategory } from "../firebase/db"

const ItemListWithLog = withLog(ItemList)

function ItemListContainer() {
    const [items, setItems] = useState([])
    const { categoryName } = useParams()

    useEffect(() => {
        if (categoryName) {
            fetchProductsByCategory(categoryName).then(res => setItems(res))
        } else {
            fetchProducts().then(res => setItems(res))
        }
    }, [categoryName])

    return (
        <ItemListWithLog items={items} />
    )
}

export default ItemListContainer