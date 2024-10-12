import React from 'react'
import '../Styles/navbar.scss'
import CartWidget from './CartWidget'

const NavBar = () => {
  return (
<ul>
      <li><a className="active" href="#home">Home</a></li>
      <li><a href="#news">Catálogo</a></li>
      <li><a href="#contact">Más vendidos</a></li>
      <li><a href="#about">Infantil</a></li>
      <li><a href="#about">Juvenil</a></li>
      <CartWidget/>
    </ul>
  )
}

export default NavBar
