import ItemCard from "../ItemCard/ItemCard";

import styles from './ItemList.module.css'

function ItemList({item}){
    return(
        <div className={styles.container}>
            {item.map((item, key)=> <ItemCard item={item} key={key}/>)}
        </div>
    )
}

export default ItemList;