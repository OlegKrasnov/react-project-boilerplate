import React from 'react'
import Menu from '@components/units/Menu'

const headerClassName = 'header'

const Header = () => (
  <header className={headerClassName}>
    <div className="container">
      <Menu />
    </div>
  </header>
)

export default Header
