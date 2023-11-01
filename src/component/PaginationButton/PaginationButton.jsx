import React from 'react'
import styled from 'styled-components'

const Button = styled.button`
  margin: 0 auto;
  width: 200px;
  padding: 20px;
  background-color: #438adb;
  border: none;
  border-radius: 30px;
  box-shadow: 1px 1px 5px #2964a8;
  transition: box-shadow 0.3s ease;
  &: hover {
    box-shadow: 1px 1px 20px #2964a8;
  }
`

export default function PaginationButton({ onClick, name }) {
  return <Button onClick={onClick}>{name}</Button>
}
