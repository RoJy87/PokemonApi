import React from 'react'
import { Button } from 'antd'

export default function PaginationButton({ onClick, name }) {
  return (
    <Button type='primary' shape='round' size='large' onClick={onClick}>
      {name}
    </Button>
  )
}
