import React from 'react'
import { Route, Switch, withRouter } from 'react-router-dom'
import { useDetectOutdatedBrowsers } from '../../hooks'
import AboutPage from './About'
import ContactsPage from './Contacts'
import HomePage from './Home'
import NotFoundPage from './NotFoundPage'
import OutdatedBrowsersPage from './OutdatedBrowsers'

const Page = () => {
  const { isOutdatedBrowser } = useDetectOutdatedBrowsers()

  return isOutdatedBrowser ? (
    <OutdatedBrowsersPage />
  ) : (
    <>
      <Switch>
        <Route exact path="/" component={HomePage}/>
        <Route exact path="/about/" component={AboutPage}/>
        <Route exact path="/contacts/" component={ContactsPage}/>
        <Route component={NotFoundPage}/>
      </Switch>
    </>
  )
}

export default withRouter(Page)
