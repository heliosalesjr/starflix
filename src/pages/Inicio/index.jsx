
import styles from './Inicio.module.css'
import Banner from '../../components/Banner'
import Title from '../../components/Title'
import Card from '../../components/Card'
import videos from '../../json/db.json/'

function Inicio() {
  return (
    <>

        <Banner imagem='home'/>
        <Title>
          <h1>A nice title here</h1>
        </Title>
        <section className={styles.container}>
          {videos.map((video) => {
            return <Card {...video} key={video.id} />

          })}
        </section>

    </>
    
  )
}

export default Inicio