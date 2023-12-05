import { createReduxStore } from '../store/store'
import { Provider } from 'react-redux'
import AppRouter from '../router/AppRouter'
import { MemoryRouter } from 'react-router-dom'
import { ConfigProvider } from 'antd'

export const testRender = (component, options) => {
  const store = createReduxStore(options?.initialState)

  return (
    <Provider store={store}>
      <ConfigProvider theme={options?.Theme}>
        <MemoryRouter initialEntries={options?.route}>
          <AppRouter />
          {component}
        </MemoryRouter>
      </ConfigProvider>
    </Provider>
  )
}
