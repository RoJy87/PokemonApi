import { renderHook, act, render, screen } from '@testing-library/react'
import renderTests from '../helpers/renderTests'
import Main from '../pages/Main/Main'
import { setLimitOnPage, setPageNumber } from '../store/reducers/paginationReducer'
import userEvent from '@testing-library/user-event'

describe('usePagination Hook', () => {
  it('should initialize with default values', () => {
    const { result } = renderHook(() => renderTests(Main, { path: '/' }))

    expect(result.current.props.store.getState().pagination.pageNumber).toBe(1)
    expect(result.current.props.store.getState().pagination.limitOnPage).toBe(20)
  })

  it('should update values correctly when nextPage is called', () => {
    const { result } = renderHook(() => renderTests(Main, { path: '/' }))

    act(() => {
      result.current.props.store.dispatch(setPageNumber(3))
      result.current.props.store.dispatch(setLimitOnPage(40))
    })

    expect(result.current.props.store.getState().pagination.pageNumber).toBe(3)
    expect(result.current.props.store.getState().pagination.limitOnPage).toBe(40)
  })

  it('usePagination test', async () => {
    render(renderTests(null, { path: '/' }))

    const btn = screen.getByText(/40/)
    expect(btn).toBeDefined()
    userEvent.click(btn)
    const cards = await screen.findAllByTestId('card-item')
    expect(cards).toHaveLength(40)

    // const btn2 = screen.getByText(/60/)
    // expect(btn2).toBeDefined()
    // userEvent.click(btn2)
    // const cards2 = await screen.findAllByTestId('card-item')
    // expect(cards2).toHaveLength(60)
  })
})
