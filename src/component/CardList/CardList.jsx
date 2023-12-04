import React, { memo } from 'react'
import poke from '../../image/icon.png'
import { Card, Image, List } from 'antd'
import { NavLink } from 'react-router-dom'

const CardList = memo(function CardList({ pokemons, isLoading }) {
  return (
    <List
      grid={{
        gutter: 16,
        xs: 1,
        sm: 2,
        md: 4,
        lg: 4,
        xl: 6,
        xxl: 8,
      }}
      // pagination={{
      //   position: 'bottom',
      //   align: 'center',
      // }}
      loading={isLoading}
      dataSource={pokemons}
      renderItem={(pokemon) => (
        <List.Item key={pokemon.name}>
          <Card
            title={pokemon.name}
            loading={isLoading}
            bodyStyle={{ display: 'flex', justifyContent: 'center', maxHeight: '148px' }}
            headStyle={{ textAlign: 'center' }}>
            <NavLink to={`details/${pokemon.name}`}>
              <Image src={poke} width={100} alt={pokemon.name} preview={false} loading={isLoading} />
            </NavLink>
          </Card>
        </List.Item>
      )}
    />
  )
})
export default CardList
