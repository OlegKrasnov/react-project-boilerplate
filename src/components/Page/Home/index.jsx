import React from 'react'
import classNames from 'classnames'
import { pageClassName } from '@components/Page/constants'

const pageCode = 'home'

const HomePage = () => (
  <div className={classNames(`${pageClassName} ${pageCode}-${pageClassName}`)}>
    <h1>Home Page</h1>
  </div>
)

export default HomePage
