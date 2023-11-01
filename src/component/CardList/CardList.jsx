import React, { memo } from 'react'
import Card from '../Card/Card'
import { useParams } from 'react-router-dom'
import styled from 'styled-components'

const CardListComponent = styled.ul`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 10px;
  list-style-type: none;
  overflow-y: auto;
  flex-grow: 1;
  ${(props) => {
    const nameid = props?.$nameid
    return nameid
      ? `
      box-shadow: 1px 1px 5px #4a6b79;
      border-radius: 15px;
      height: calc(100vh - 374px);
`
      : ''
  }};

  &::-webkit-scrollbar {
    width: 10px;
  }
  &::-webkit-scrollbar-track {
    background: transparent;
  }
  &::-webkit-scrollbar-thumb {
    background: #888;
    border-radius: 15px;
  }
  &::-webkit-scrollbar-thumb:hover {
    background: #555;
  }
`

const CardListLoading = styled.h1`
  flex-grow: 1;
`

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
