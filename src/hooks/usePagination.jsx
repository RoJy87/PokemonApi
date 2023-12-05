import { useCallback } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { setLimitOnPage, setPageNumber } from '../store/reducers/paginationReducer'
import { getLimitOnPage, getPageNumber } from '../store/selectors/getPagination'

export default function usePagination() {
  const pageNumber = useSelector(getPageNumber)
  const limitOnPage = useSelector(getLimitOnPage)
  const offset = limitOnPage * pageNumber

  const dispatch = useDispatch()

  const prevPage = useCallback(() => {
    dispatch(setPageNumber(Math.max(pageNumber - 1, 1)))
  }, [dispatch, pageNumber])

  const nextPage = useCallback(() => {
    dispatch(setPageNumber(pageNumber + 1))
  }, [dispatch, pageNumber])

  const onClickFilter = useCallback(
    (num) => {
      dispatch(setLimitOnPage(num))
    },
    [dispatch],
  )

  return [pageNumber, limitOnPage, prevPage, nextPage, onClickFilter, offset]
}
