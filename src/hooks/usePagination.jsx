import { useCallback } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { setLimitOnPage, setPageNumber } from '../slice/paginationSlice'

export default function usePagination() {
  const pageNumber = useSelector((state) => state.pagination.pageNumber)
  const limitOnPage = useSelector((state) => state.pagination.limitOnPage)
  const totalPages = useSelector((state) => state.pagination.totalPages)

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

  return [pageNumber, limitOnPage, totalPages, prevPage, nextPage, onClickFilter]
}
