import React from 'react'
import classNames from 'classnames'
import { pageClassName } from '@components/Page/constants'
import { usePageMeta } from '@hooks'

const pageCode = 'about'

const AboutPage = () => {
  usePageMeta({ pageCode })

  return (
    <div className={classNames(`${pageClassName} ${pageCode}-${pageClassName}`)}>
      <h1>About Page</h1>
    </div>
  )
}

export default AboutPage
