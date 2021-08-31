import React from 'react'
import { Route, Switch, withRouter } from 'react-router-dom'
import AboutPage from './About'
import ContactsPage from './Contacts'
import HomePage from './Home'

const Page = () => (
  <>
    <Switch>
      <Route exact path="/" component={HomePage}/>
      <Route exact path="/about/" component={AboutPage}/>
      <Route exact path="/contacts/" component={ContactsPage}/>
    </Switch>
  </>
)

export default withRouter(Page)
