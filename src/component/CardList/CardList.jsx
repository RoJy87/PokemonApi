import React from 'react'
import Card from '../Card/Card'
import { useParams } from 'react-router-dom'
import { CardListComponent, CardListLoading } from './styled'
import { getAllPokemons } from '../../store/selectors/getPokemons'
import { useSelector } from 'react-redux'

const CardList = () => {
  const pokemons = useSelector(getAllPokemons)
  const status = useSelector((state) => state.pokemon.status)
  const { nameid } = useParams()

  return status === 'loading' ? (
    <CardListLoading>Загрузка...</CardListLoading>
  ) : (
    status === 'succeeded' && (
      <CardListComponent $nameid={nameid}>
        {pokemons?.map((pokemon) => {
          return <Card data-testid='card' key={pokemon.name} name={pokemon.name} />
        })}
      </CardListComponent>
    )
  )
}
export default CardList
