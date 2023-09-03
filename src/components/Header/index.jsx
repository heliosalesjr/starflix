import React from 'react'
import styles from './Header.module.css'
import { Link } from 'react-router-dom'
import logo from '../../assets/logo.png'
import HeaderLinks from '../HeaderLinks'

function Header() {
  return (
    <>
    
        <header className={styles.header}>
            <Link to='/'>
                <img src={logo} alt='Logo do projeto' />
            </Link>

            <nav>
                <HeaderLinks url='./'>Home</HeaderLinks>
                <HeaderLinks url='./favoritos'>Favoritos</HeaderLinks>
                <HeaderLinks url='./contato'>Contato</HeaderLinks>
            </nav>
        </header>

    
    </>
  )
}

export default Header