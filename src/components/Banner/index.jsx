import styles from "./Banner.module.css"
import bannerHome from "../../assets/home.png"


function Banner( {imagem}) {
  return (
    <>
    
        <div className={styles.cover}>
          
          <img src={bannerHome} alt='Banner do projeto' />
        
        </div>
    
    </>
  )
}

export default Banner