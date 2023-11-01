import React from 'react'
import logo from '../../image/logo.png'
import { Link } from 'react-router-dom'
import styled from 'styled-components'

const HeaderComponent = styled.header`
  display: flex;
  align-items: center;
  background: linear-gradient(135deg, #e55d87 0%, #5fc3e4 100%);
  padding: 10px 20px;
`

const HeaderLink = styled(Link)`
  color: #bf4f74;
  font-weight: bold;
`

const HeaderLogo = styled.img`
  color: #bf4f74;
  font-weight: bold;
`

const HeaderTitle = styled.h1`
  font-size: 38px;
  flex-grow: 1;
  text-align: center;
`

export default function Header() {
  return (
    <HeaderComponent>
      <HeaderLink to={'/'}>
        <HeaderLogo src={logo} alt='logo' className='header__logo' />
      </HeaderLink>
      <HeaderTitle>Pokemon stats</HeaderTitle>
    </HeaderComponent>
  )
}
