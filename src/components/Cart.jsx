import React, { useContext } from "react";
import { CartContext } from "../context/CartProvider";
import { NavLink } from "react-router-dom";
import CartItem from "./CartItem"; 
import '../Styles/cart.scss'; 

const Cart = () => {
    const { cart, clearCart, removeItem } = useContext(CartContext);

    // Cálculo del total
    const totalPrice = cart.reduce((acc, item) => acc + (item.price * (item.quantity || 1)), 0);

    const handlePurchase = () => {
        const order = {
            buyer: { name: "Nombre", lastName: "Apellido", email: "email@ejemplo.com" },
            products: cart,
            total: totalPrice,
            timestamp: new Date().toLocaleString(),
        };
        console.log("Orden creada:", order);
        clearCart();
    };

    return (
        <div className="cart-container">
            {cart.length ? (
                <>
                    {cart.map(item => (
                        <CartItem key={item.id} item={item} removeItem={removeItem} /> 
                    ))}
                    <h3 className="total-price">Total: ${totalPrice.toFixed(2)}</h3>
                    <button onClick={handlePurchase} style={{ backgroundColor: "#333", borderRadius: "5px", color: "white", padding: "10px 15px" }}>Realizar compra</button>
                </>
            ) : (
                <div className="empty-cart">
                    <h1>No hay productos en el carrito</h1>
                    <NavLink to="/" className="back-link">Volver a inicio</NavLink>
                </div>
            )}
        </div>
    );
};

export default Cart;






