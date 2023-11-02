import styled from 'styled-components'

export const Button = styled.button.attrs((props) => ({
  $bgColor: props.$bgColor || '#438adb',
}))`
  margin: 0 auto;
  width: 200px;
  padding: 20px;
  background-color: ${(props) => props.$bgColor};
  border: none;
  border-radius: 30px;
  box-shadow: 1px 1px 5px #2964a8;
  transition: box-shadow 0.3s ease;
  &: hover {
    box-shadow: 1px 1px 20px #2964a8;
  }
`
