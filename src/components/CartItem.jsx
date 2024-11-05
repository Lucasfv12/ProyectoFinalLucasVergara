import React, { useContext } from "react";
import "../Styles/CartItem.scss"; 
import Swal from "sweetalert2";
import { CartContext } from "../context/CartProvider"; 

const CartItem = ({ item }) => {
    const { removeItem } = useContext(CartContext);

    const handleRemove = () => {
        Swal.fire({
            title: `¿Realmente quieres eliminar "${item.title}" del carrito?`,
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Sí, eliminar',
            cancelButtonText: 'No, cancelar'
        }).then((result) => {
            if (result.isConfirmed) {
                removeItem(item.id);
                Swal.fire(
                    'Eliminado!',
                    `${item.title} ha sido eliminado del carrito.`,
                    'success'
                );
            }
        });
    };

    return (
        <div className="cart-item" style={{ display: "flex", alignItems: "center", marginBottom: "10px" }}>
            <img src={item.picture} alt={item.title} style={{ width: "50px", height: "auto", marginRight: "10px" }} />
            <div style={{ flex: "1" }}>
                <h4>{item.title}</h4>
                <p>Precio: ${item.price.toFixed(2)}</p>
                <p>Cantidad: {item.quantity}</p>
                <button onClick={handleRemove} style={{ backgroundColor: "red", borderRadius: "5px", color: "white", padding: "10px 15px" }}>
                    Eliminar
                </button>
            </div>
        </div>
    );
};

export default CartItem;





