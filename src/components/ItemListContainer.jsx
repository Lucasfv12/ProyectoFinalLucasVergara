import React from 'react'

const ItemListContainer = ({greeting}) => {
  return (
    <div style={{textAlign:"center", margin:"20px 0",color:"#4CAF50", fontWeight:"bold", textShadow: "2px 2px 5px rgba(0, 0, 0, 0.3)"}}>
      <h1>{greeting}</h1>
    </div>
  )
}

export default ItemListContainer
