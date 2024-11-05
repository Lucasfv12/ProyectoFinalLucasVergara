import { Routes, Route } from "react-router-dom";
import NavBar from "./components/NavBar";
import ItemListContainer from "./components/ItemListContainer";
import ItemDetailContainer from "./components/ItemDetailContainer";
import Footer from "./components/Footer";
import NotFound from "./components/NotFound";
import Cart from "./components/Cart";
import Checkout from "./components/Checkout"; // Importamos el componente Checkout

function App() {
  const greeting = "¡Bienvenido a nuestra tienda!";

  return (
    <>
      <NavBar />
      <Routes>
        <Route path="/" element={<ItemListContainer greeting={greeting} />} />
        <Route path="/category/:id" element={<ItemListContainer />} />
        <Route path="/item/:id" element={<ItemDetailContainer />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/checkout" element={<Checkout />} /> {/* Nueva ruta para Checkout */}
        <Route path="*" element={<NotFound />} />
      </Routes>
      <Footer />
    </>
  );
}

export default App;










