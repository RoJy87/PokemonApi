import React, { memo } from 'react'
import poke from '../../image/icon.png'
// import Card from '../Card/Card'
import { Card, Image, Flex } from 'antd'
import { NavLink } from 'react-router-dom'

const CardList = memo(function CardList({ pokemons, isLoading }) {
  console.log('CardList', 'rerender')

  return isLoading ? (
    <h1>Загрузка...</h1>
  ) : (
    <Flex wrap='wrap' gap='small' justify='center' align='flex-start'>
      {pokemons?.map((pokemon) => {
        return (
          <Card key={pokemon.name} name={pokemon.name} title={pokemon.name} style={{ width: 300 }}>
            <Image src={poke} width={100} />
            <NavLink to={`details/${pokemon.name}`}>Подробнее</NavLink>
          </Card>
        )
      })}
    </Flex>
  )
})
export default CardList
