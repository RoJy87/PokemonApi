import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import renderTests from '../../helpers/renderTests'
import Main from '../../pages/Main/Main'

describe('Router test App', () => {
  test('Router test', async () => {
    render(renderTests(null, { path: '/' }))
    const btn = await screen.findAllByText('Подробнее')
    userEvent.click(btn[0])
    expect(await screen.findByText('Abilities')).toBeDefined()
    userEvent.click(screen.getByTestId('link-logo'))
    expect(screen.getByText('Pokemon stats')).toBeDefined()
  })

  test('Error page test', () => {
    render(renderTests(null, { path: '/asddasd' }))
    expect(screen.getByText('Not Found')).toBeDefined()
  })

  test('INPUT EVENT', () => {
    render(renderTests(null, { path: '/' }))
    const input = screen.getByTestId('search-input')
    userEvent.type(input, '123123')
    expect(screen.getByTestId('search-input').value).toEqual('123123')
  })
})
