import React from 'react'
import { BrowserRouter as Router } from 'react-router-dom'
import { useBrowserDetect } from './hooks'
import Footer from '@components/Footer'
import Header from '@components/Header'
import Page from '@components/Page'

const App = () => {
  useBrowserDetect()

  return (
    <Router>
      <Header/>
      <main>
        <div className="container">
          <Page/>
        </div>
      </main>
      <Footer/>
    </Router>
  )
}

export default App
