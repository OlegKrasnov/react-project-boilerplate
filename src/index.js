import 'react-app-polyfill/ie11'
import 'react-app-polyfill/stable'
import React from 'react'
import * as ReactDOMClient from 'react-dom/client'
import App from './App'

import './assets/styles/main.scss'

const rootElement = document.getElementById('root')
const root = ReactDOMClient.createRoot(rootElement)
root.render(<App/>)
