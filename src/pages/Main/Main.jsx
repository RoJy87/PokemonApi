import React, { memo, useCallback, useEffect, useState } from 'react'
import CardList from '../../component/CardList/CardList'
import Search from '../../component/Search/Search'
import PaginationButton from '../../component/PaginationButton/PaginationButton'
import { Outlet } from 'react-router-dom'
import styled from 'styled-components'
import { getAllCards } from '../../api/cardsApi'

const PaginationWrapper = styled.div`
  margin: 0 auto 20px;
  width: fit-content;
  display: flex;
  gap: 20px;
`

const ListWrapper = styled.div`
  display: flex;
  gap: 20px;
  margin-bottom: 20px;
  flex-grow: 1;
`

const Main = memo(function Main() {
  const [pageNumber, setPageNumber] = useState(1)
  const [limitOnPage, setLimitOnPage] = useState(20)
  const [totalPages, setTotalPages] = useState(0)
  const [pokemons, setPokemons] = useState([])
  const [searchPoke, setSearchPoke] = useState(pokemons)
  const [isLoading, setIsLoading] = useState(false)

  async function getAllPokemons(limit, offset) {
    setIsLoading(true)
    try {
      const { totalCount, pokemons } = await getAllCards(limit, offset)
      setTotalPages(Math.floor(totalCount / limit))
      pokemons.forEach((poke) => {
        setPokemons((prev) => {
          const isExist = prev.some((item) => item.name === poke.name)
          if (!isExist) {
            return [...prev, poke]
          }
          return prev
        })
      })
      setIsLoading(false)
    } catch (error) {
      console.log(error)
    }
  }

  useEffect(() => {
    setSearchPoke(pokemons)
  }, [pokemons])

  useEffect(() => {
    setPokemons([])
    getAllPokemons(limitOnPage, pageNumber)
  }, [pageNumber, limitOnPage])

  const prevPage = useCallback(() => {
    setPageNumber(Math.max(pageNumber - 1, 1))
  }, [pageNumber])

  const nextPage = useCallback(() => {
    setPageNumber(pageNumber + 1)
  }, [pageNumber])

  const onClickFilter = useCallback((num) => {
    setLimitOnPage(num)
  }, [])

  const onSearchHandler = useCallback(
    (text) => {
      if (!text) return setSearchPoke(pokemons)
      const result = pokemons.filter((poke) => {
        return poke.name.toLowerCase().includes(text.toLowerCase())
      })
      setSearchPoke(result)
    },
    [pokemons],
  )

  return (
    <>
      <Search onSearchHandler={onSearchHandler} onClickFilter={onClickFilter} />
      <ListWrapper>
        <CardList offset={pageNumber * limitOnPage} limit={limitOnPage} pokemons={searchPoke} isLoading={isLoading} />
        <Outlet />
      </ListWrapper>
      <PaginationWrapper>
        {pageNumber > 1 && <PaginationButton name='Назад' onClick={prevPage} />}
        {pageNumber < totalPages && <PaginationButton name='Вперед' onClick={nextPage} />}
      </PaginationWrapper>
    </>
  )
})
export default Main
