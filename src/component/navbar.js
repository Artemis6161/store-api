import React from 'react'
import {  NavLink } from "react-router-dom";
import {useSelector} from "react-redux"

import "./navbar.css"
const Navbar = () => {
const items = useSelector((state)=>state.cart);
  return (
    <nav className="navbarItems" >
    <span className="logo">REDUX STORE</span>
    <div>
        <NavLink   className="navLink"  to="/" >
        Home
        </NavLink>
        <NavLink  className="navLink" to="/cart"  >
        cart
        </NavLink>
       
        <span className='cartCount'>
          Cart items: {items.length}
        </span>
    </div>
    </nav>
  )
}

export default Navbar
