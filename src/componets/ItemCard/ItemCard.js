import { Link } from 'react-router-dom';
import styles from './ItemCard.module.css'

function ItemCard({ item }){
    const imageUrl = "https://image.tmdb.org/t/p/w300" + item.poster_path;
    return (
        <div className={styles.cardContainer}>
            <Link to={'/movie/' + item.id} >
                <img 
                        width={250}
                        height={345}
                        src={imageUrl} 
                        alt={item.title} 
                        className={styles.posterImg}
                    />
                <h3 >{item.title}</h3>
            </Link>
        </div>
    )
}

export default ItemCard;