import React from 'react'
import './Inicio.module.css'
import Header from '../../components/Header'
import Footer from '../../components/Footer'
import Banner from '../../components/Banner'
import Title from '../../components/Title'

function Inicio() {
  return (
    <>
        <Header />
        <Banner imagem='home'/>
        <Title>
          <h1>A nice title here</h1>
        </Title>
        <Footer />
    </>
    
  )
}

export default Inicio