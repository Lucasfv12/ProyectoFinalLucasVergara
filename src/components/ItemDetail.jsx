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
    <div>
      {product ? (
        <div>
          <h1>{product.title}</h1>
          <img src={product.picture} alt={product.title} />
          <p>{product.description}</p>
          <p>Precio: ${product.price.toFixed(2)}</p>
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
            />
          </div>
          <button onClick={handleAddToCart}>Agregar al carrito</button>
        </div>
      ) : (
        <div>No se encontró el producto.</div>
      )}
    </div>
  );
};

export default ItemDetail;











