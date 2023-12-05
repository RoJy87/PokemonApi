import React, { useCallback, useEffect, useMemo, useState } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { setPokemons, setSearchPoke } from '../../store/reducers/pokemonReducer'
import { setTotalPages } from '../../store/reducers/paginationReducer'
import CardList from '../../component/CardList/CardList'
import NavComponent from '../../component/NavComponent/NavComponent'
import { getPokemonApi } from '../../api/cardsApi'
import usePagination from '../../hooks/usePagination'
import { Button, Result, Space } from 'antd'
import { getAllPokemons, getSearchedPokemon } from '../../store/selectors/getPokemon'
import { getTotalPages } from '../../store/selectors/getPagination'

const Main = () => {
  const [pageNumber, limitOnPage, prevPage, nextPage, onClickFilter, offset] = usePagination()
  const { getAllCards, getCard } = getPokemonApi

  const pokemons = useSelector(getAllPokemons)
  const totalPages = useSelector(getTotalPages)
  const searchPoke = useSelector(getSearchedPokemon)
  const dispatch = useDispatch()

  const [searchNotFound, setSearchNotFound] = useState(false)
  const [isLoading, setIsLoading] = useState(false)

  const getAllPokemonsHandler = useCallback(
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
    [dispatch, getAllCards],
  )

  useEffect(() => {
    dispatch(setPokemons([]))
    getAllPokemonsHandler(limitOnPage, offset)
  }, [pageNumber, limitOnPage, getAllPokemonsHandler, dispatch, offset])

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
    [dispatch, getCard, pokemons],
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
        <CardList offset={offset} limit={limitOnPage} pokemons={searchPoke} isLoading={isLoading} />
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
