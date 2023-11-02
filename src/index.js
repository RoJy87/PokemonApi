import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom'
import App from './component/App/App'
import { GlobalStyled } from './GlobalStyled'

const root = ReactDOM.createRoot(document.getElementById('root'))
root.render(
  <BrowserRouter>
    <React.StrictMode>
      <GlobalStyled />
      <App />
    </React.StrictMode>
  </BrowserRouter>,
)
