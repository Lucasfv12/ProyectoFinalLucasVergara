import React, { useState, useContext } from "react"
import "../Styles/Card.scss"
import { CartContext } from "../context/CartProvider"

const imageMap = {
  1: "/images/zelda.png",
  2: "/images/SuperMario.png",
  3: "/images/DemonSouls.png",
  4: "/images/spiderman.png",
  5: "/images/haloInfinite.png",
  6: "/images/forzaHorizon.png"
};

const ItemDetail = ({ product }) => {
  const [quantity, setQuantity] = useState(1)
  const { addItem } = useContext(CartContext)

  const itemImage = imageMap[product.id] || "/images/default.png"

  const handleIncrement = () => {
    setQuantity((prevQuantity) => prevQuantity + 1)
  };

  const handleDecrement = () => {
    if (quantity > 1) {
      setQuantity((prevQuantity) => prevQuantity - 1)
    }
  };

  const handleAddToCart = () => {
    addItem(product, quantity)
    console.log(`Agregado ${quantity} de ${product.titulo} al carrito`)
  };

  return (
    <div style={{ display: "flex", justifyContent: "center", margin: "20px" }}>
      <div
        style={{
          border: "1px solid #ccc",
          borderRadius: "5px",
          padding: "10px",
          width: "300px",
          textAlign: "center",
        }}
      >
        <img
          src={itemImage}
          alt={product.titulo}
          className="image-hover"
          style={{ width: "100%", height: "auto", borderRadius: "5px" }}
        />
        <h3 style={{ marginTop: "10px" }}>{product.titulo}</h3>
        <p>{product.descripcion}</p>
        <p>Precio: ${product.precio.toFixed(2)}</p>

        <div style={{ display: "flex", alignItems: "center", justifyContent: "center" }}>
          <button onClick={handleDecrement} style={{
              backgroundColor: "#333",
              textDecoration: "none",
              borderRadius: "5px",
              color: "white",
              marginTop: "30px",
              padding: "10px 15px",
            }}>-</button>
          <span style={{ margin: "0 20px", marginTop:"25px", fontWeight: "bold", display: "flex", alignItems: "center" }}>{quantity}</span>
          <button onClick={handleIncrement} style={{
              backgroundColor: "#333",
              textDecoration: "none",
              borderRadius: "5px",
              color: "white",
              marginTop: "30px",
              padding: "10px 15px",
            }}>+</button>
        </div>

        <button onClick={handleAddToCart} style={{
              backgroundColor: "#333",
              textDecoration: "none",
              borderRadius: "5px",
              color: "white",
              marginTop: "30px",
              padding: "10px 15px",
            }}>
          Agregar al carrito
        </button>
      </div>
    </div>
  )
}

export default ItemDetail


