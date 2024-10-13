import React, { useState } from "react"
import zeldaImage from "../assets/zelda.webp"
import marioImage from "../assets/SuperMario.png"
import demonImage from "../assets/DemonSouls.png"
import spidermanImagen from "../assets/spiderman.png"
import haloImage from "../assets/haloInfinite.png"
import forzaImage from "../assets/forzaHorizon.png"
import "../Styles/Card.scss"

const ItemDetail = ({ product }) => {
  const [quantity, setQuantity] = useState(1)

  let itemImage
  switch (product.id) {
    case 1:
      itemImage = zeldaImage
      break
    case 2:
      itemImage = marioImage
      break
    case 3:
      itemImage = demonImage
      break
    case 4:
      itemImage = spidermanImagen
      break
    case 5:
      itemImage = haloImage
      break
    case 6:
      itemImage = forzaImage
      break
    default:
      itemImage = product.picture.url
  }

  const handleIncrement = () => {
    setQuantity((prevQuantity) => prevQuantity + 1)
  }

  const handleDecrement = () => {
    if (quantity > 1) {
      setQuantity((prevQuantity) => prevQuantity - 1)
    }
  }

  const handleAddToCart = () => {
    console.log(`Agregado ${quantity} de ${product.titulo} al carrito`)
  }

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
        <h3 style={{marginTop:"10px"}}>{product.titulo}</h3>
        <p>{product.descripcion}</p>
        <p>Precio: ${product.precio.toFixed(2)}</p>

        <div style={{ display: "flex", alignItems: "center", justifyContent: "center" }}>
          <button onClick={handleDecrement} style={{
                  backgroundColor: "#333",
                  textDecoration: "none",
                  borderRadius:"5px",
                  color: "white",
                  marginTop: "30px",
                  padding: "10px 15px",
                }}>-</button>
          <span style={{ margin: "0 20px", marginTop:"25px", fontWeight: "bold", display: "flex", alignItems: "center" }}>{quantity}</span>
          <button onClick={handleIncrement} style={{
                  backgroundColor: "#333",
                  textDecoration: "none",
                  borderRadius:"5px",
                  color: "white",
                  marginTop: "30px",
                  padding: "10px 15px",
                }}>+</button>
        </div>

        <button onClick={handleAddToCart} style={{
                  backgroundColor: "#333",
                  textDecoration: "none",
                  borderRadius:"5px",
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