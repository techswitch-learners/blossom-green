import React from "react"
import { NavLink } from "react-router-dom"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faHouse, faShoppingBasket } from "@fortawesome/free-solid-svg-icons"
import "./Navbar.scss"

const Navbar = () => {
  return (
    <nav className="Navbar">
      <p className="font-mynerve">
        Blossom <span className="green">Green</span>
      </p>
      <ul>
        <li>
          <NavLink to="/">
            <FontAwesomeIcon icon={faHouse} className="icon" /> Home
          </NavLink>
        </li>
        <li>
          <NavLink to="/products">
            <img
              src={`${process.env.PUBLIC_URL}/favicon-32x32.png`}
              alt="The Blossom Green logo, a tulip"
              className="icon"
            />{" "}
            Products
          </NavLink>
        </li>
        <li>
          <NavLink to="/basket">
            <FontAwesomeIcon icon={faShoppingBasket} className="icon" /> Basket
          </NavLink>
        </li>
      </ul>
    </nav>
  )
}

export default Navbar
