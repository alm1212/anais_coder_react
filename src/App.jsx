import './App.css'
import NavBar from './componentes/NavBar/NavBar';
import ItemListContainer from './componentes/ItemListContainer/ItemListContainer'
import ItemDetailContainer from './componentes/ItemDetailContainer/ItemdetailContainer';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

function App() {

  return (
    <>
    <BrowserRouter>
      <h1>Eben-ezer</h1>
      <NavBar />
      <Routes>
        <Route path="/" element={<ItemListContainer greeting="Listado de cursos" color="pink"/> }/>
        <Route path="/category/:categoryId" element={<ItemListContainer greeting="Cursos por categoría" color="pink"/> }/>
        <Route path="/detail/:productId" element={<ItemDetailContainer/>}/>  
      </Routes>
    </BrowserRouter>
    </>
  )
}

export default App
