import React from 'react'
import { BrowserRouter as Router } from 'react-router-dom'
import { isIE } from 'react-device-detect'
import { useBrowserDetect } from './hooks'
import Footer from '@components/Footer'
import Header from '@components/Header'
import Page from '@components/Page'

const App = () => {
  useBrowserDetect()

  const pageContent =
    (<div className="container">
      <Page />
    </div>)

  return (
    <Router>
      <Header />
      {
        isIE ? pageContent :
          <main>
            {pageContent}
          </main>
      }
      <Footer />
    </Router>
  )
}

export default App
