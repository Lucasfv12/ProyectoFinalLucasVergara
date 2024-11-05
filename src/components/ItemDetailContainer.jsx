import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { doc, getDoc } from "firebase/firestore";
import { db } from "../firebase/config";
import ItemDetail from "./ItemDetail";

const ItemDetailContainer = () => {
  const { id } = useParams();
  const [product, setProduct] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchProduct = async () => {
      const productRef = doc(db, "products", id);
      const productSnap = await getDoc(productRef);

      if (productSnap.exists()) {
        setProduct({ id: productSnap.id, ...productSnap.data() });
      } else {
        console.log("No existe el producto!");
      }
      setLoading(false);
    };

    fetchProduct();
  }, [id]);

  if (loading) return <div>Cargando...</div>;

  return (
    <div>
      {product ? (
        <ItemDetail product={product} />
      ) : (
        <div>No se encontró el producto.</div>
      )}
    </div>
  );
};

export default ItemDetailContainer;



