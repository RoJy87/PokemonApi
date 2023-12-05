import { render, screen } from '@testing-library/react'
import '../../../matchMedia'
import App from './App'
import { testRender } from '../../helpers/testRender'
import { MemoryRouter } from 'react-router-dom'
import ThemeWrapper from '../themeWrapper/themeWrapper'
import { createReduxStore } from '../../store/store'
import { Provider } from 'react-redux'
import CardList from '../CardList/CardList'

describe('TEST APP', () => {
  test('renders App', () => {
    render(testRender(<App />, [{ route: '/' }]))
    expect(screen.getByText(/Pokemon stats/i)).toBeInTheDocument()
  })

  // test('renders card', async () => {
  //   axios.get.mockResolvedValueOnce({
  //     data: {
  //       totalCount: 10,
  //       pokemons: ['qwe1', 'qwe2', 'qwe3'],
  //     },
  //   })
  //   render(
  //     <MemoryRouter initialEntries={['/']}>
  //       <App />
  //     </MemoryRouter>,
  //   )
  //   const card = await screen.findByTestId('card')
  //   expect(card).toBeInTheDocument()
  // })

  // test('INPUT EVENT', () => {
  //   render(
  //     <MemoryRouter initialEntries={['/']}>
  //       <App />
  //     </MemoryRouter>,
  //   )
  //   const input = screen.getByPlaceholderText(/Введите имя покемона/i)
  //   expect(screen.queryByTestId('search input')).toContainHTML('')
  //   userEvent.type(input, '123123')
  //   expect(screen.queryByTestId('search input')).toContainHTML('123123')
  // })
})
