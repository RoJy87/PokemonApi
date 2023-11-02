import React, { useCallback, useEffect, useState } from 'react'
import CardList from '../../component/CardList/CardList'
import NavComponent from '../../component/NavComponent/NavComponent'
import PaginationButton from '../../component/PaginationButton/PaginationButton'
import styled from 'styled-components'
import { getAllCards, getCard } from '../../api/cardsApi'
import usePagination from '../../hooks/usePagination'

const PaginationWrapper = styled.div`
  margin: 0 auto 20px;
  width: fit-content;
  display: flex;
  gap: 20px;
`

const Main = () => {
  console.log('main', 'rerender')

  const [pageNumber, limitOnPage, totalPages, prevPage, nextPage, onClickFilter, setTotalPages] = usePagination()

  const [pokemons, setPokemons] = useState([])
  const [searchPoke, setSearchPoke] = useState(pokemons)
  const [searchNotFound, setSearchNotFound] = useState(false)
  const [isLoading, setIsLoading] = useState(false)

  const getAllPokemons = useCallback(
    async (limit, offset) => {
      setIsLoading(true)
      try {
        const { totalCount, pokemons } = await getAllCards(limit, offset)
        setTotalPages(Math.floor(totalCount / limit))
        setPokemons(pokemons)
        setIsLoading(false)
      } catch (error) {
        console.log(error)
      }
    },
    [setTotalPages],
  )

  useEffect(() => {
    setSearchPoke(pokemons)
  }, [pokemons])

  useEffect(() => {
    setPokemons([])
    getAllPokemons(limitOnPage, pageNumber)
  }, [pageNumber, limitOnPage, getAllPokemons])

  const onSearchHandler = useCallback(
    async (text) => {
      setSearchNotFound(false)
      try {
        if (!text) return setSearchPoke(pokemons)
        const result = await getCard(text)
        if (!result) return setSearchNotFound(true)
        setSearchPoke([result])
      } catch (error) {
        console.log(error)
      }
    },
    [pokemons],
  )

  return (
    <>
      <NavComponent onSearchHandler={onSearchHandler} onClickFilter={onClickFilter} />
      {searchNotFound ? (
        <h1>Не найдено</h1>
      ) : (
        <CardList offset={pageNumber * limitOnPage} limit={limitOnPage} pokemons={searchPoke} isLoading={isLoading} />
      )}
      <PaginationWrapper>
        {pageNumber > 1 && <PaginationButton name='Назад' onClick={prevPage} />}
        {pageNumber < totalPages && <PaginationButton $bgColor='#760f96' name='Вперед' onClick={nextPage} />}
      </PaginationWrapper>
    </>
  )
}
export default Main
