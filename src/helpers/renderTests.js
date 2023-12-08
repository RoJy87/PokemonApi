import React from 'react'
import { Provider } from 'react-redux'
import { MemoryRouter } from 'react-router-dom'
import { createReduxStore } from '../store/store'
import App from '../component/App/App'

export default function renderTests(children, options) {
  return (
    <Provider store={createReduxStore(options?.initialState)}>
      <MemoryRouter initialEntries={[options?.path]}>
        <App />
        {children}
      </MemoryRouter>
    </Provider>
  )
}
