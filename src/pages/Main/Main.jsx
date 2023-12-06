import React, { useCallback, useEffect, useState } from 'react'
import CardList from '../../component/CardList/CardList'
import NavComponent from '../../component/NavComponent/NavComponent'
import PaginationButton from '../../component/PaginationButton/PaginationButton'
import styled from 'styled-components'
import usePagination from '../../hooks/usePagination'
import { useDispatch, useSelector } from 'react-redux'
import { getAllPokemons, getSearchedPokemon, getTotalPokemons } from '../../store/selectors/getPokemons'
import { fetchAllPokemons, fetchPokemon, setSearchedPokemon } from '../../store/reducers/pokemonReducer'

const PaginationWrapper = styled.div`
  margin: 0 auto 20px;
  width: fit-content;
  display: flex;
  gap: 20px;
`

const Main = () => {
  const [pageNumber, limitOnPage, prevPage, nextPage, onClickFilter, offset] = usePagination()

  const pokemons = useSelector(getAllPokemons)
  const searchedPokemon = useSelector(getSearchedPokemon)
  const totalPokemons = useSelector(getTotalPokemons)

  const dispatch = useDispatch()

  const [searchNotFound, setSearchNotFound] = useState(false)
  const status = useSelector((state) => state.pokemon.status)

  useEffect(() => {
    dispatch(fetchAllPokemons({ limit: limitOnPage, offset }))
  }, [dispatch, limitOnPage, offset, pageNumber])

  const onSearchHandler = useCallback(
    async (text) => {
      setSearchNotFound(false)
      try {
        if (!text && !pokemons.lenght) return dispatch(fetchAllPokemons({ limit: limitOnPage, offset }))
        if (!text && pokemons.lenght) return dispatch(setSearchedPokemon(pokemons))
        dispatch(fetchPokemon(text))
        if (!!searchedPokemon) return setSearchNotFound(true)
        dispatch(setSearchedPokemon())
      } catch (error) {
        console.log(error)
      }
    },
    [dispatch, limitOnPage, offset, pokemons, searchedPokemon],
  )

  return (
    <>
      <NavComponent onSearchHandler={onSearchHandler} onClickFilter={onClickFilter} />
      {searchNotFound ? (
        <h1>Не найдено</h1>
      ) : (
        <CardList offset={offset} limit={limitOnPage} pokemons={searchedPokemon} status={status} />
      )}
      <PaginationWrapper>
        {pageNumber > 1 && <PaginationButton name='Назад' onClick={prevPage} />}
        {pageNumber < totalPokemons && <PaginationButton $bgColor='#760f96' name='Вперед' onClick={nextPage} />}
      </PaginationWrapper>
    </>
  )
}
export default Main
