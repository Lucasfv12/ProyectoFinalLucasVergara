// CartWidget.jsx
import React, { useContext } from "react";
import { CartContext } from "../context/CartProvider";
import { NavLink } from "react-router-dom";
import cartImage from '../assets/Cart.svg';

const CartWidget = () => {
    const { cart } = useContext(CartContext);
    const totalItems = cart.reduce((acc, item) => acc + item.quantity, 0);

    return (
        <NavLink
            to="/cart"
            style={{
                display: "flex",
                alignItems: "center",
                position: "fixed", // Fija el ícono en la pantalla
                top: "10px", // Ajusta la distancia desde el borde superior
                right: "20px", // Ajusta la distancia desde el borde derecho
                backgroundColor: "#ffffff", // Fondo para hacer que el ícono se destaque
                padding: "5px 10px",
                borderRadius: "5px",
                boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
                zIndex: 1000 // Asegura que el ícono esté por encima de otros elementos
            }}
        >
            <img
                src={cartImage}
                alt="Carrito"
                style={{ cursor: "pointer", width: "40px", height: "40px" }}
            />
            <span style={{ marginLeft: "10px", fontSize: "16px", fontWeight: "bold", color: "#333" }}>
                {totalItems > 0 ? totalItems : 0}
            </span>
        </NavLink>
    );
};

export default CartWidget;


