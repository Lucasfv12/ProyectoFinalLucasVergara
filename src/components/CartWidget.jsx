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
                position: "fixed", 
                top: "10px", 
                right: "20px", 
                backgroundColor: "#ffffff", 
                padding: "5px 10px",
                borderRadius: "5px",
                boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
                zIndex: 1000 
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


