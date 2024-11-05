// App.js - elimina la importación y envoltura adicional de CartProvider
import { Routes, Route } from "react-router-dom";
import NavBar from "./components/NavBar";
import ItemListContainer from "./components/ItemListContainer";
import ItemDetailContainer from "./components/ItemDetailContainer";
import Footer from "./components/Footer";
import NotFound from "./components/NotFound";
import Cart from "./components/Cart";

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
        <Route path="*" element={<NotFound />} />
      </Routes>
      <Footer />
    </>
  );
}

export default App;









