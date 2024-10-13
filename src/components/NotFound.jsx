import React from 'react'

const NotFound = () => {
  return (
    <div style={{ textAlign: 'center', marginTop: '50px' }}>
      <h2>404 - Página no encontrada</h2>
      <p>Lo sentimos, la página que estás buscando no existe.</p>
      <a href="/" style={{ color: '#4CAF50', textDecoration: 'none', fontSize: '18px' }}>
        Volver al inicio
      </a>
    </div>
  )
}

export default NotFound
