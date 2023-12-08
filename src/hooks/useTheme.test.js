import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import renderTests from '../helpers/renderTests'
import Main from '../pages/Main/Main'

describe('Hook theme test', () => {
  test('useTheme test', () => {
    render(renderTests(null, { path: '/' }))

    const layout = screen.getByTestId('app')
    const btn = screen.getByTestId('btn-theme')
    expect(btn).toBeDefined()
    const initialStyleLayout = window.getComputedStyle(layout)
    userEvent.click(btn)
    const updatedStyleLayout = window.getComputedStyle(layout)
    expect(initialStyleLayout.backgroundColor).not.toEqual(updatedStyleLayout.backgroundColor)
  })
})
