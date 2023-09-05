import Banner from '../../components/Banner'
import styles from './Favorites.module.css'
import Title from '../../components/Title'
import Card from '../../components/Card'
import { useFavoritoContext } from '../../contexts/favoritos'

function Favorites() {

  const { favorito } = useFavoritoContext();

  return (
    <>

        <Banner imagem='favorites'/>
        <Title>
            <h1>My favorites</h1>
        </Title>
        <section className={styles.container}>
            {favorito.map((fav) => {
              return <Card {...fav} key={fav.id} />})}
        </section>
    
    </>
  )
}

export default Favorites