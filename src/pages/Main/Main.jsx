import React, { useEffect, useState } from 'react'
import CardList from '../../component/CardList/CardList'
import NavComponent from '../../component/NavComponent/NavComponent'
import PaginationButton from '../../component/PaginationButton/PaginationButton'
import styled from 'styled-components'
import usePagination from '../../hooks/usePagination'
import { useDispatch, useSelector } from 'react-redux'
import { getAllPokemons, getTotalPokemons } from '../../store/selectors/getPokemons'
import { fetchAllPokemons, fetchPokemon, setPokemons } from '../../store/reducers/pokemonReducer'

const PaginationWrapper = styled.div`
  margin: 0 auto 20px;
  width: fit-content;
  display: flex;
  gap: 20px;
`

const Main = () => {
  const [pageNumber, limitOnPage, prevPage, nextPage, onClickFilter, offset] = usePagination()

  const pokemons = useSelector(getAllPokemons)
  const totalPokemons = useSelector(getTotalPokemons)

  const pokemonsKeys = pokemons.map((item) => {
    return Object.values(item)
  })

  console.log(pokemonsKeys)

  const dispatch = useDispatch()

  const [searchNotFound, setSearchNotFound] = useState(false)

  useEffect(() => {
    dispatch(fetchAllPokemons({ limit: limitOnPage, offset }))
  }, [dispatch, limitOnPage, offset, pageNumber])

  const onSearchHandler = async (text) => {
    setSearchNotFound(false)
    try {
      if (!text && pokemons.length < 2) {
        await dispatch(fetchAllPokemons({ limit: limitOnPage, offset }))
      } else {
        const result = await dispatch(fetchPokemon(text))
        if (!!result.length) {
          setSearchNotFound(true)
        } else {
          dispatch(setPokemons([result.payload.pokemon]))
        }
      }
    } catch (error) {
      console.log(error)
    }
  }

  return (
    <>
      <NavComponent onSearchHandler={onSearchHandler} onClickFilter={onClickFilter} />
      {searchNotFound ? <h1>Не найдено</h1> : <CardList offset={offset} limit={limitOnPage} />}
      <PaginationWrapper>
        {pageNumber > 1 && <PaginationButton name='Назад' onClick={prevPage} />}
        {pageNumber < totalPokemons && <PaginationButton $bgColor='#760f96' name='Вперед' onClick={nextPage} />}
      </PaginationWrapper>
    </>
  )
}
export default Main
