import React from 'react'
import classNames from 'classnames'
import { pageClassName } from '@components/Page/constants'
import { usePageMeta } from '@hooks'

const pageCode = 'not-found'

const NotFoundPage = () => {
  usePageMeta({ pageCode })

  return (
    <div className={classNames(`${pageClassName} ${pageCode}-${pageClassName}`)}>
      <h1>Not Found Page</h1>
    </div>
  )
}

export default NotFoundPage
