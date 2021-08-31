import React from 'react'
import classNames from 'classnames'
import { pageClassName } from '@components/Page/constants'

const pageCode = 'contacts'

const ContactsPage = () => (
  <div className={classNames(`${pageClassName} ${pageCode}-${pageClassName}`)}>
    <h1>Contacts Page</h1>
  </div>
)

export default ContactsPage
