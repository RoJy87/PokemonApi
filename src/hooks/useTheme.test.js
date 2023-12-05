import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { MemoryRouter } from 'react-router'
import App from '../component/App/App'

describe('Hook test', () => {
  test('useTheme test', () => {
    render(
      <MemoryRouter initialEntries={['/']}>
        <App />
      </MemoryRouter>,
    )

    const layout = screen.getByTestId('app')
    const btn = screen.getByTestId('btn-theme')
    expect(btn).toBeDefined()
    const initialStyleLayout = window.getComputedStyle(layout)
    userEvent.click(btn)
    const updatedStyleLayout = window.getComputedStyle(layout)
    expect(initialStyleLayout.backgroundColor).not.toEqual(updatedStyleLayout.backgroundColor)
  })
})
