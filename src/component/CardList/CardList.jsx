import React, { memo } from 'react'
import Card from '../Card/Card'
import { useParams } from 'react-router-dom'
import { CardListComponent, CardListLoading } from './styled'

const CardList = memo(function CardList({ pokemons, isLoading }) {
  const { nameid } = useParams()

  return isLoading ? (
    <CardListLoading>Загрузка...</CardListLoading>
  ) : (
    <CardListComponent $nameid={nameid}>
      {pokemons?.map((pokemon) => {
        return <Card key={pokemon.name} name={pokemon.name} />
      })}
    </CardListComponent>
  )
})
export default CardList
