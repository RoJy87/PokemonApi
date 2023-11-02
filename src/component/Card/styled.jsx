import styled from 'styled-components'
import { NavLink } from 'react-router-dom'

export const CardComponent = styled.li`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 250px;
  height: 200px;
  box-sizing: border-box;
  border: 1px solid black;
  border-radius: 10px;
  margin: 0 auto;
`

export const CardTitle = styled.h3`
  margin: 0;
  width: 100%;
  flex-grow: 2;
  text-align: center;
  background-color: #438adb;
  border-radius: 10px 10px 0 0;
  padding: 10px;
`

export const CardImage = styled.img`
  width: 100px;
  height: 100px;
  object-fit: cover;
`

export const CardButton = styled(NavLink)`
  cursor: pointer;
  background-color: transparent;
  border: none;
  width: 50%;
  padding: 15px;
  margin-bottom: 20px;
  box-shadow: 1px 1px 5px #7c92db;
  border-radius: 10px;
  transition: box-shadow 0.3s ease;
  text-decoration: none;
  color: #000;
  &:hover {
    box-shadow: 1px 1px 20px #475fac;
  }

  &.active {
    background-color: #438adb;
  }
`
