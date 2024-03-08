import './App.css'
import NavBar from './componentes/NavBar/NavBar';
import ItemListContainer from './componentes/ItemListContainer/ItemListContainer'
import ItemDetailContainer from './componentes/ItemDetailContainer/ItemdetailContainer';

function App() {

  return (
    <>
    <h1>Eben-ezer</h1>
    <NavBar />
    <ItemListContainer greeting="Listado de cursos" color="pink"/> 
    <ItemDetailContainer/>
    </>
  )
}

export default App
