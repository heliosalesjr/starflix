
import styles from './HeaderLinks.module.css'
import { Link } from 'react-router-dom'

function HeaderLinks({url, children}) {
  return (
    <>
    
        <Link to={url} className={styles.link}>

            {children}
        
        </Link>
    
    </>
  )
}

export default HeaderLinks