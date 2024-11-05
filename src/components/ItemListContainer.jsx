import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom"; // Asegúrate de incluir esta línea
import { collection, getDocs, query, where } from "firebase/firestore";
import { db } from "../firebase/config";
import Item from "./Item";

const ItemListContainer = () => {
  const { id } = useParams(); // Ahora debería funcionar
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchProducts = async () => {
      const productsCollection = collection(db, "products");
      const q = id ? query(productsCollection, where("category", "==", id)) : productsCollection; // Filtrar si hay una categoría
      const productSnapshot = await getDocs(q);
      const productList = productSnapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }));
      setProducts(productList);
      setLoading(false);
    };

    fetchProducts();
  }, [id]);

  if (loading) return <div>Cargando...</div>;

  return (
    <div>
      <div style={{ display: "flex", flexWrap: "wrap", justifyContent: "center" }}>
        {products.map(product => (
          <Item key={product.id} product={product} />
        ))}
      </div>
    </div>
  );
};

export default ItemListContainer;







