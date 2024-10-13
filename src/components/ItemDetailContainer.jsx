import React, { useEffect, useState } from "react"
import { useParams } from "react-router-dom"
import mockData from "../assets/MockData.json"
import ItemDetail from "./ItemDetail"

const ItemDetailContainer = () => {
  const { id } = useParams()
  const [item, setItem] = useState(null)
  const [loading, setLoading] = useState(true)

  const fetchItem = (id) => {
    return new Promise((resolve) => {
      setTimeout(() => {
        const foundItem = mockData.find((item) => item.id === parseInt(id))
        resolve(foundItem)
      }, 2000)
    })
  }

  useEffect(() => {
    const loadItem = async () => {
      const foundItem = await fetchItem(id)
      setItem(foundItem)
      setLoading(false)
    }

    loadItem()
  }, [id])

  if (loading) return <div>Cargando...</div>
  if (!item) return <div>Producto no encontrado.</div>

  return (
    <div>
      <ItemDetail product={item} />
    </div>
  )
}

export default ItemDetailContainer

