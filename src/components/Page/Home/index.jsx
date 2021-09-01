import React from 'react'
import classNames from 'classnames'
import { pageClassName } from '@components/Page/constants'
import { usePageMeta } from '@hooks'

const pageCode = 'home'

const HomePage = () => {
  usePageMeta({ pageCode })

  return (
    <div className={classNames(`${pageClassName} ${pageCode}-${pageClassName}`)}>
      <h1>Home Page</h1>
    </div>
  )
}

export default HomePage
