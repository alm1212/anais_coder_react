// import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
import './App.css'
import NavBar from './componentes/NavBar/NavBar';
//import CartWidget from './componentes/CartWidget/CartWidget';
import ItemListContainer from './componentes/ItemListContainer/ItemListContainer'

function App() {

  return (
    <>
    <h1>Eben-ezer</h1>
    <NavBar />
    <ItemListContainer label="Bienvenido(a) a nuestra Academia Online Eben-ezer"/>    
    </>
  )
}

export default App
