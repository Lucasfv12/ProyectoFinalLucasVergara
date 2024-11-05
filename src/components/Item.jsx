import React from "react";
import { Link } from "react-router-dom";
import "../Styles/Card.scss"; 

const Item = ({ product }) => {
  return (
    <div className="card">
      <img src={product.picture} alt={product.title} />
      <h3>{product.title}</h3>
      <p>{product.description}</p>
      <p><strong>Precio: ${product.price.toFixed(2)}</strong></p>
      <Link to={`/item/${product.id}`}>
        <button>Ver Detalles</button>
      </Link>
    </div>
  );
};

export default Item;

