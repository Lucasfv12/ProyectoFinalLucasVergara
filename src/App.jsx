import NavBar from './components/NavBar'
import ItemListContainer from './components/itemListContainer'

function App() {

  const greeting = "¡Bienvenido a nuestra tienda!"

  return (
    <>
      <NavBar/>
      <ItemListContainer greeting={greeting}/>
    </>
  )
}

export default App
