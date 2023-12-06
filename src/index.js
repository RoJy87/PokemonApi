import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom'
import App from './component/App/App'
import { GlobalStyled } from './GlobalStyled'
import { Provider } from 'react-redux'
import { createReduxStore } from './store/store'

const root = ReactDOM.createRoot(document.getElementById('root'))
root.render(
  <Provider store={createReduxStore()}>
    <BrowserRouter>
      <React.StrictMode>
        <GlobalStyled />
        <App />
      </React.StrictMode>
    </BrowserRouter>
  </Provider>,
)
