import styles from './Card.module.css';
import iconeFavoritar from './favoritar.png';

function Card( { id, title, cover } ) {
  return (
    <div className={styles.container}>
            <img src={cover} alt={title} className={styles.cover} />
            <h2>{title}</h2>
            <img src={iconeFavoritar}
                alt="Favoritar filme"
                className={styles.favoritar} />
    </div>
  )
}

export default Card