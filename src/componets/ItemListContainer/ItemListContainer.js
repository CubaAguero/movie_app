import movie from "../../assests/data/movies.json"
import ItemList from "../ItemList/ItemList";

import styles from './ItemListContainer.module.css'

function ItemListContainer(){
    return (
        <div className={styles.container}>
            <ItemList item={movie} />
        </div>
    )
}

export default ItemListContainer;