import React from 'react'
import classNames from 'classnames'
import { pageClassName } from '@components/Page/constants'

const pageCode = 'outdated-browsers'

const OutdatedBrowsersPage = () => (
  <div className={classNames(`${pageClassName} ${pageCode}-${pageClassName}`)}>
    <h1>Outdated Browsers Page</h1>
  </div>
)

export default OutdatedBrowsersPage
