import React from 'react'
import styled from 'styled-components'

const FooterComponent = styled.div`
  width: 100%;
  min-height: 100px;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 32px;
  background: ${(props) => props.theme.backgroundFooter};
  color: ${(props) => props.theme.color};
`

export default function Footer() {
  return <FooterComponent className='footer'>Footer</FooterComponent>
}
