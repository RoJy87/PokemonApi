import React, { memo } from 'react'
import poke from '../../image/icon.png'
import { CardButton, CardComponent, CardImage, CardTitle } from './styled'

const Card = memo(function Card({ name }) {
  console.log('Card', 'rerender')

  return (
    <CardComponent>
      <CardTitle>{name}</CardTitle>
      <CardImage src={poke} alt='Иконка покемона' />
      <CardButton to={`details/${name}`}>Подробнее</CardButton>
    </CardComponent>
  )
})

export default Card
