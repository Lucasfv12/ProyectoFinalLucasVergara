import React from "react";
import { Link } from "react-router-dom";

const Item = ({ product }) => {
  return (
    <div style={{ border: "1px solid #ccc", borderRadius: "5px", margin: "10px", padding: "10px", width: "200px", textAlign: "center" }}>
      <img src={product.picture} alt={product.title} style={{ width: "100%", height: "auto", borderRadius: "5px" }} />
      <h3>{product.title}</h3>
      <p>{product.description}</p>
      <p>Precio: ${product.price.toFixed(2)}</p>
      <Link to={`/item/${product.id}`}>
        <button style={{ backgroundColor: "#333", borderRadius: "5px", color: "white", padding: "10px 15px" }}>Ver Detalles</button>
      </Link>
    </div>
  );
};

export default Item;
