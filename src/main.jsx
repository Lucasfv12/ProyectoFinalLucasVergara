import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import App from './App.jsx';
import CartProvider from './context/CartProvider'; // Asegúrate de que la ruta sea correcta

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BrowserRouter>
      <CartProvider> {/* Envuelve App con CartProvider */}
        <App />
      </CartProvider>
    </BrowserRouter>
  </StrictMode>,
);


