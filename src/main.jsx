import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom'

// Importamos Bootstrap (Esto no da error si npm install se hizo bien)
import 'bootstrap/dist/css/bootstrap.min.css';

// Tu CSS global (si lo dejaste vacío no pasa nada)
import './index.css'

import App from './App.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </React.StrictMode>,
)