import React, { useCallback, useEffect, useMemo, useState } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { setPokemons, setSearchPoke } from '../../slice/pokemonSlice'
import { setTotalPages } from '../../slice/paginationSlice'
import CardList from '../../component/CardList/CardList'
import NavComponent from '../../component/NavComponent/NavComponent'
import { getAllCards, getCard } from '../../api/cardsApi'
import usePagination from '../../hooks/usePagination'
import { Button, Result, Space } from 'antd'

const Main = () => {
  const [pageNumber, limitOnPage, totalPages, prevPage, nextPage, onClickFilter] = usePagination()

  const pokemons = useSelector((state) => state.pokemon.pokemons)
  const searchPoke = useSelector((state) => state.pokemon.searchPoke)
  const dispatch = useDispatch()

  const [searchNotFound, setSearchNotFound] = useState(false)
  const [isLoading, setIsLoading] = useState(false)

  const getAllPokemons = useCallback(
    async (limit, offset) => {
      setIsLoading(true)
      try {
        const { totalCount, pokemons } = await getAllCards(limit, offset)
        dispatch(setTotalPages(Math.floor(totalCount / limit)))
        dispatch(setPokemons(pokemons))
        dispatch(setSearchPoke(pokemons))
        setIsLoading(false)
      } catch (error) {
        console.log(error)
      }
    },
    [dispatch],
  )

  useEffect(() => {
    dispatch(setPokemons([]))
    getAllPokemons(limitOnPage, pageNumber)
  }, [pageNumber, limitOnPage, getAllPokemons, dispatch])

  const onSearchHandler = useMemo(
    () => async (text) => {
      setSearchNotFound(false)
      try {
        if (!text) return dispatch(setSearchPoke(pokemons))
        const result = await getCard(text)
        if (!result) return setSearchNotFound(true)
        dispatch(setSearchPoke([result]))
      } catch (error) {
        console.log(error)
      }
    },
    [dispatch, pokemons],
  )

  const resetSearch = useMemo(
    () => () => {
      setSearchNotFound(false)
      dispatch(setSearchPoke(pokemons))
    },
    [dispatch, pokemons],
  )

  return (
    <>
      <NavComponent onSearchHandler={onSearchHandler} onClickFilter={onClickFilter} />
      {searchNotFound ? (
        <Result
          title='Покемон не найден, попробуйте другое имя'
          extra={
            <Button onClick={resetSearch} type='primary'>
              На главную
            </Button>
          }
        />
      ) : (
        <CardList offset={pageNumber * limitOnPage} limit={limitOnPage} pokemons={searchPoke} isLoading={isLoading} />
      )}
      {!searchNotFound && (
        <Space align='center' size='large' style={{ width: '100%', justifyContent: 'center', margin: '20px 0 0 0' }}>
          {pageNumber > 1 && (
            <Button onClick={prevPage} shape='round' size='large' loading={isLoading}>
              Назад
            </Button>
          )}
          {pageNumber < totalPages && (
            <Button onClick={nextPage} shape='round' size='large' loading={isLoading}>
              Вперед
            </Button>
          )}
        </Space>
      )}
    </>
  )
}
export default Main
