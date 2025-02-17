import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './assets/index.scss'
import {BrowserRouter} from 'react-router-dom'

import './18n'

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </React.StrictMode>,
)
