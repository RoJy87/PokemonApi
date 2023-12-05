import React from 'react'
import logo from '../../image/logo.png'
import { Link } from 'react-router-dom'
import styled from 'styled-components'

const HeaderComponent = styled.header`
  display: flex;
  align-items: center;
  background: ${(props) => props.theme.backgroundHeader};
  padding: 10px 20px;
`

const HeaderLink = styled(Link)``

const HeaderLogo = styled.img``

const HeaderTitle = styled.h1`
  color: ${(props) => props.theme.color};
  font-size: 38px;
  flex-grow: 1;
  text-align: center;
`

const HeaderTheme = styled.button`
  color: ${(props) => props.theme.color};
  background-color: transparent;
  font-size: 18px;
  text-align: center;
  padding: 10px;
  box-shadow: 0 0 5px #2964a8;
  border-radius: 15px;
  transition: box-shadow 0.3s ease;
  &: hover {
    box-shadow: 1px 1px 20px #2964a8;
  }
`

export default function Header({ toggleTheme }) {
  return (
    <HeaderComponent>
      <HeaderLink data-testid='link-logo' to={'/'}>
        <HeaderLogo src={logo} alt='logo' />
      </HeaderLink>
      <HeaderTitle>Pokemon stats</HeaderTitle>
      <HeaderTheme data-testid='btn-theme' onClick={toggleTheme}>
        Theme
      </HeaderTheme>
    </HeaderComponent>
  )
}
