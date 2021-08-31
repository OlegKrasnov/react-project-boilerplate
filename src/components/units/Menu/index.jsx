import React from 'react'
import { NavLink as Link } from 'react-router-dom'

import './style.scss'

const menuClassName = 'menu'

const Menu = () => (
  <div className={menuClassName}>
    <nav>
      <Link exact to="/">
        Home
      </Link>
      <Link exact to="/about/">
        About
      </Link>
      <Link exact to="/contacts/">
        Contacts
      </Link>
    </nav>
  </div>
)

export default Menu
