import Banner from '../../components/Banner'
import styles from './Favorites.module.css'
import Title from '../../components/Title'
import Card from '../../components/Card'


function Favorites() {
  return (
    <>

        <Banner imagem='favorites'/>
        <Title>
            <h1>My favorites</h1>
        </Title>
        <section className={styles.container}>
            <Card id='1' title='hey fave' cover='www.pudim.com.br' />
        </section>
    
    </>
  )
}

export default Favorites