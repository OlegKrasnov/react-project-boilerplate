import React from 'react'
import { Route, Routes } from 'react-router-dom'
import { useDetectOutdatedBrowsers } from '../../hooks'
import AboutPage from './About'
import ContactsPage from './Contacts'
import HomePage from './Home'
import NotFoundPage from './NotFoundPage'
import OutdatedBrowsersPage from './OutdatedBrowsers'

const Page = () => {
  const { isOutdatedBrowser } = useDetectOutdatedBrowsers()

  return isOutdatedBrowser ? (
    <OutdatedBrowsersPage/>
  ) : (
    <>
      <Routes>
        <Route path="/" element={<HomePage/>}/>
        <Route path="/about/" element={<AboutPage/>}/>
        <Route path="/contacts/" element={<ContactsPage/>}/>
        <Route element={<NotFoundPage/>}/>
      </Routes>
    </>
  )
}

export default Page
