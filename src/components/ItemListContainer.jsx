import React, { useEffect, useState } from "react"
import { useParams, Link } from "react-router-dom"
import mockData from "../assets/MockData.json"
import zeldaImage from "../assets/zelda.webp"
import marioImage from "../assets/SuperMario.png"
import demonImage from "../assets/DemonSouls.png"
import spidermanImagen from "../assets/spiderman.png"
import haloImage from "../assets/haloInfinite.png"
import forzaImage from "../assets/forzaHorizon.png"
import "../Styles/Card.scss"

const ItemListContainer = () => {
  const { id } = useParams()
  const [items, setItems] = useState([])
  const [loading, setLoading] = useState(true)
  const greeting = "¡Bienvenido a nuestra tienda!"

  useEffect(() => {
    const loadItems = () => {
      setLoading(true)
      setTimeout(() => {
        if (id) {
          const filteredItems = mockData.filter((item) => item.category === id)
          setItems(filteredItems)
        } else {
          setItems(mockData)
        }
        setLoading(false)
      }, 2000)
    }

    loadItems()
  }, [id])

  if (loading) return <div>Cargando...</div>

  return (
    <div style={{textAlign: "center", marginTop: "20px"}}>
      <h1>{greeting}</h1>
      <div style={{ display: "flex", flexWrap: "wrap", justifyContent: "center" }}>
        {items.map((item) => (
          <div
            key={item.id}
            style={{
              border: "2px solid #ccc",
              borderRadius: "5px",
              margin: "10px",
              padding: "10px",
              width: "200px",
              textAlign: "center",
              display: "flex",
              flexDirection: "column",
              justifyContent: "space-between",
            }}
          >
            <img
              src={
                item.id === 1
                  ? zeldaImage
                  : item.id === 2
                  ? marioImage
                  : item.id === 3
                  ? demonImage
                  : item.id === 4
                  ? spidermanImagen
                  : item.id === 5
                  ? haloImage
                  : item.id === 6
                  ? forzaImage
                  : item.picture.url
              }
              alt={item.titulo}
              className="image-hover"
              style={{ width: "100%", height: "auto", borderRadius: "5px" }}
            />
            <h3 style={{ marginTop: "20px" }}>{item.titulo}</h3>
            <p>{item.descripcion}</p>
            <p style={{ marginTop: "20px" }}>
              Precio: <strong>${item.precio.toFixed(2)}</strong>
            </p>
            <Link to={`/item/${item.id}`}>
              <button
                style={{
                  backgroundColor: "#333",
                  textDecoration: "none",
                  borderRadius:"5px",
                  color: "white",
                  marginTop: "30px",
                  padding: "10px 15px",
                }}
              >
                Ver Detalles
              </button>
            </Link>
          </div>
        ))}
      </div>
    </div>
  )
}

export default ItemListContainer

