import React from 'react'
import ReactDOM from 'react-dom/client'
import { HashRouter } from 'react-router-dom'
import App from './App'

window.electronLog.log('@@@@@@@ RENDERER4 STARTED @@@@@@@')

const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement)

root.render(
  <HashRouter>
    <App />
  </HashRouter>
)
