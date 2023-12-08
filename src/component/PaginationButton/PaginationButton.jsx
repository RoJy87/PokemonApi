import React from 'react'
import { Button } from './styled'

export default function PaginationButton({ onClick, name, $bgColor }) {
  return (
    <Button data-testid='pagination-btn' onClick={onClick} $bgColor={$bgColor}>
      {name}
    </Button>
  )
}
