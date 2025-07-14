import { useState , useEffect } from "react"
import { useParams } from "react-router"
import ItemList from "./ItemList"
import withLog from "../hoc/withLog"
import { fetchProducts } from "../firebase/db"

const ItemListWithLog = withLog(ItemList)

function ItemListContainer() {
    const [items, setItems] = useState([])
    const { categoryName } = useParams()

    useEffect(() => {
        fetchProducts().then(res => {
            if (categoryName) {
                const filtered = res.filter(prod => prod.category === categoryName)
                setItems(filtered)
            } else {
                setItems(res)
            }
        })
    }, [categoryName])

    return (
        <ItemListWithLog items={items} />
    )

}

export default ItemListContainer