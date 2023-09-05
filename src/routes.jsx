import Favorites from "./pages/Favorites"
import Inicio from "./pages/Inicio"
import { BrowserRouter, Route, Routes } from "react-router-dom"

import Header from './components/Header'
import Footer from './components/Footer'
import Container from "./components/Container"
import FavoritosProvider from "./contexts/favoritos"

function AppRoutes() {
  return (
    <BrowserRouter>
        <Header />
        <Container>
          <FavoritosProvider>
            <Routes>
                <Route path="/" element={<Inicio />}> </Route>
                <Route path="/favorites" element={ <Favorites/> }></Route>
                <Route path="*" element={<div>É O ERRO HEIN!</div>}></Route>
            </Routes>
          </FavoritosProvider>
        </Container>
        <Footer />
    </BrowserRouter>
    
  )
}

export default AppRoutes