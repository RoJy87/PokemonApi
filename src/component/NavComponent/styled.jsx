import styled from 'styled-components'

const NavComponent = styled.section`
  display: flex;
  justify-content: space-around;
  align-items: flex-end;
  padding: 20px 0;
  height: 80px;
`

const SearchInput = styled.input`
  width: 50%;
  border-radius: 15px;
  height: 100%;
`

const LimitCards = styled.div`
  display: flex;
  gap: 10px;
`
const LimitButton = styled.button`
  cursor: pointer;
  border: none;
  background-color: transparent;
  border-radius: 15px;
  padding: 10px;
  box-shadow: 2px 2px 5px #2e639e;
  transition: box-shadow 0.3s ease;
  &:hover {
    box-shadow: 2px 2px 15px #2e639e;
  }
`

export { NavComponent, SearchInput, LimitCards, LimitButton }
