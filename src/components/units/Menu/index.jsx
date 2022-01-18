import React from 'react'
import { NavLink as Link } from 'react-router-dom'

import './style.scss'

const menuClassName = 'menu'

const Menu = () => (
  <div className={menuClassName}>
    <nav>
      <Link to="/">
        Home
      </Link>
      <Link to="/about/">
        About
      </Link>
      <Link to="/contacts/">
        Contacts
      </Link>
    </nav>
  </div>
)

export default Menu
