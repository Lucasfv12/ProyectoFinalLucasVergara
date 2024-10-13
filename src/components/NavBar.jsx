import React from "react"
import "../Styles/Navbar.scss"
import CartWidget from "./CartWidget"
import { NavLink } from "react-router-dom"

const NavBar = () => {
  return (
    <ul>
      <li>
        <NavLink className="active" to="/">
          Home
        </NavLink>
      </li>
      <li>
        <NavLink to="/category/nintendo">Catálogo Nintendo</NavLink>
      </li>
      <li>
        <NavLink to="/category/ps5">Catálogo PS5</NavLink>
      </li>
      <li>
        <NavLink to="/category/xbox">Catálogo Xbox</NavLink>
      </li>
      <CartWidget />
    </ul>
  )
}

export default NavBar
