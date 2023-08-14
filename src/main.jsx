import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom'
import App from './App.jsx'

import './index.css'
import { ResultContextProvider } from './context/ResultContextProvider.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(
  <ResultContextProvider>
    <BrowserRouter>

      <React.StrictMode>
        <App />
      </React.StrictMode>
    </BrowserRouter>
  </ResultContextProvider>
)
