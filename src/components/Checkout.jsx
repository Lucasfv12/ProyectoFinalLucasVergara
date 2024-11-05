import React, { useContext, useState } from "react";
import { CartContext } from "../context/CartProvider";
import { db } from "../firebase/config"; 
import { collection, addDoc } from "firebase/firestore";
import SweetAlert from "sweetalert2";

const Checkout = () => {
  const { cart, clearCart } = useContext(CartContext);
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    phone: "",
    email: "",
    emailConfirm: ""
  });
  const [orderId, setOrderId] = useState(null);
  
  const total = cart.reduce((acc, item) => acc + item.price * item.quantity, 0);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (formData.email !== formData.emailConfirm) {
      SweetAlert.fire({
        icon: "error",
        title: "Error",
        text: "Los correos no coinciden.",
      });
      return;
    }

    try {
      const ordersRef = collection(db, "orders");
      const docRef = await addDoc(ordersRef, {
        items: cart,
        total,
        customer: {
          firstName: formData.firstName,
          lastName: formData.lastName,
          phone: formData.phone,
          email: formData.email
        }
      });

      setOrderId(docRef.id);
      clearCart(); 

      SweetAlert.fire({
        icon: "success",
        title: "Orden completada",
        text: `Gracias por comprar en nuestra tienda. Tu ID de orden es: ${docRef.id}`,
      });
    } catch (error) {
      SweetAlert.fire({
        icon: "error",
        title: "Error",
        text: "No se pudo completar la orden. Intenta nuevamente.",
      });
    }
  };

  return (
    <div>
      <h2>Checkout</h2>
      {cart.length === 0 ? (
        <p>No hay productos en el carrito.</p>
      ) : (
        <div>
          <h3>Items en tu orden:</h3>
          <ul>
            {cart.map(item => (
              <li key={item.id}>
                {item.title} - Cantidad: {item.quantity} - Precio: ${item.price.toFixed(2)}
              </li>
            ))}
          </ul>
          <h4>Total: ${total.toFixed(2)}</h4>
          <form onSubmit={handleSubmit}>
            <input
              type="text"
              name="firstName"
              placeholder="Nombre"
              value={formData.firstName}
              onChange={handleChange}
              required
            />
            <input
              type="text"
              name="lastName"
              placeholder="Apellido"
              value={formData.lastName}
              onChange={handleChange}
              required
            />
            <input
              type="text"
              name="phone"
              placeholder="Teléfono"
              value={formData.phone}
              onChange={handleChange}
              required
            />
            <input
              type="email"
              name="email"
              placeholder="Email"
              value={formData.email}
              onChange={handleChange}
              required
            />
            <input
              type="email"
              name="emailConfirm"
              placeholder="Repetir Email"
              value={formData.emailConfirm}
              onChange={handleChange}
              required
            />
            <button type="submit">Finalizar Orden</button>
          </form>
        </div>
      )}
      {orderId && <p>ID de la orden: {orderId}</p>}
    </div>
  );
};

export default Checkout;

