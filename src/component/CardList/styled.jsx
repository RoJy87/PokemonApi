import styled from 'styled-components'

export const CardListComponent = styled.ul`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 10px;
  list-style-type: none;
  overflow-y: auto;
  flex-grow: 1;
  ${(props) => {
    const nameid = props?.$nameid
    return nameid
      ? `
      box-shadow: 1px 1px 5px #4a6b79;
      border-radius: 15px;
      height: calc(100vh - 374px);
`
      : ''
  }};

  &::-webkit-scrollbar {
    width: 10px;
  }
  &::-webkit-scrollbar-track {
    background: transparent;
  }
  &::-webkit-scrollbar-thumb {
    background: #888;
    border-radius: 15px;
  }
  &::-webkit-scrollbar-thumb:hover {
    background: #555;
  }
`

export const CardListLoading = styled.h1`
  flex-grow: 1;
`
