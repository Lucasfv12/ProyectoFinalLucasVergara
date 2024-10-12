import React from 'react'
import '../Styles/navbar.scss'
import CartWidget from './CartWidget'

const NavBar = () => {
  return (
<ul>
      <li><Link className="active" to="/">Home</Link></li>
      <li><Link to="/category/nintendo">Catálogo Nintendo</Link></li>
      <li><Link to="/category/ps5">Catálogo PS5</Link></li>
      <li><Link to="/category/xbox">Catálogo <Xbox></Xbox></Link></li>
      <CartWidget/>
    </ul>
  )
}

export default NavBar
