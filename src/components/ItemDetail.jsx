import React, { useEffect, useState, useContext } from "react";
import { useParams } from "react-router-dom";
import { doc, getDoc } from "firebase/firestore";
import { db } from "../firebase/config";
import { CartContext } from "../context/CartProvider";
import Swal from 'sweetalert2';

const ItemDetail = () => {
  const { id } = useParams();
  const [product, setProduct] = useState(null);
  const [loading, setLoading] = useState(true);
  const [quantity, setQuantity] = useState(1);
  const { addToCart } = useContext(CartContext);

  useEffect(() => {
    const fetchProduct = async () => {
      try {
        const productRef = doc(db, "products", id);
        const productSnap = await getDoc(productRef);

        if (productSnap.exists()) {
          setProduct({ id: productSnap.id, ...productSnap.data() });
        } else {
          console.log("No existe el producto!");
        }
      } catch (error) {
        console.error("Error al obtener el producto:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchProduct();
  }, [id]);

  const handleAddToCart = () => {
    if (addToCart && product) {
      addToCart(product, quantity);
      
      Swal.fire({
        title: `${product.title} ha sido agregado al carrito!`,
        icon: 'success',
        confirmButtonText: 'Aceptar'
      });
    }
  };

  if (loading) return <div>Cargando...</div>;

  return (
    <div style={{ display: "flex", justifyContent: "center", alignItems: "center", minHeight: "100vh" }}>
      {product ? (
        <div style={{
          border: "1px solid #ccc",
          borderRadius: "8px",
          padding: "20px",
          boxShadow: "0 4px 8px rgba(0, 0, 0, 0.2)",
          maxWidth: "400px",
          textAlign: "center",
        }}>
          <h1>{product.title}</h1>
          <img src={product.picture} alt={product.title} style={{ width: "100%", borderRadius: "8px" }} />
          <p>{product.description}</p>
          <p><strong>Precio: ${product.price.toFixed(2)}</strong></p>
          <p>Stock disponible: {product.stock}</p>
          <div>
            <label htmlFor="quantity">Cantidad:</label>
            <input
              id="quantity"
              type="number"
              value={quantity}
              onChange={(e) => setQuantity(Math.min(e.target.value, product.stock))}
              min="1"
              max={product.stock}
              style={{ margin: "10px", padding: "5px", width: "60px" }}
            />
          </div>
          <button onClick={handleAddToCart} style={{ backgroundColor: "#333", color: "#fff", padding: "10px 15px", borderRadius: "5px", border: "none" }}>
            Agregar al carrito
          </button>
        </div>
      ) : (
        <div>No se encontró el producto.</div>
      )}
    </div>
  );
};

export default ItemDetail;












