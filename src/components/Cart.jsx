import React, { useContext } from "react";
import { CartContext } from "../context/CartProvider";
import { NavLink, useNavigate } from "react-router-dom";
import CartItem from "./CartItem"; 
import '../Styles/cart.scss'; 

const Cart = () => {
    const { cart, clearCart, removeItem } = useContext(CartContext);
    const navigate = useNavigate(); 

    const totalPrice = cart.reduce((acc, item) => acc + (item.price * (item.quantity || 1)), 0);

    const handleProceedToCheckout = () => {
        navigate("/checkout"); 
    };

    return (
        <div className="cart-container">
            {cart.length ? (
                <>
                    {cart.map(item => (
                        <CartItem key={item.id} item={item} removeItem={removeItem} /> 
                    ))}
                    <h3 className="total-price">Total: ${totalPrice.toFixed(2)}</h3>
                    <button onClick={handleProceedToCheckout} style={{ backgroundColor: "#333", borderRadius: "5px", color: "white", padding: "10px 15px" }}>Finalizar compra</button>
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







