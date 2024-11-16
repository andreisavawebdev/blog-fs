import React from 'react'
import ReactDOM from 'react-dom/client'
import { App } from './App.jsx'

import './assets/pico.min.css'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <body className='container'>
      <App />
    </body>
  </React.StrictMode>,
)
