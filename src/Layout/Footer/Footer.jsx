import React from 'react'
import styled from 'styled-components'

const FooterComponent = styled.div`
  width: 100%;
  min-height: 100px;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 32px;
  background: linear-gradient(135deg, #5fc3e4 0%, #e55d87 100%);
`

export default function Footer() {
  return <FooterComponent className='footer'>Footer</FooterComponent>
}
