import { useCallback, useState } from 'react'

export default function usePagination() {
  const [pageNumber, setPageNumber] = useState(1)
  const [limitOnPage, setLimitOnPage] = useState(20)
  const [totalPages, setTotalPages] = useState(1)

  const prevPage = useCallback(() => {
    setPageNumber(Math.max(pageNumber - 1, 1))
  }, [pageNumber])

  const nextPage = useCallback(() => {
    setPageNumber(pageNumber + 1)
  }, [pageNumber])

  const onClickFilter = useCallback((num) => {
    setLimitOnPage(num)
  }, [])

  return [pageNumber, limitOnPage, totalPages, prevPage, nextPage, onClickFilter, setTotalPages]
}
