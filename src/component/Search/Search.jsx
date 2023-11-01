import React, { memo, useEffect, useState } from 'react'
import styled from 'styled-components'

const SearchComponent = styled.section`
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

const FilterWrapper = styled.div`
  display: flex;
  gap: 10px;
`
const FilterButton = styled.button`
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

const CARDS_ON_PAGE = [20, 40, 60]

function debounce(func, delay) {
  let timeoutId
  return function (...args) {
    clearTimeout(timeoutId)
    timeoutId = setTimeout(() => {
      func(...args)
    }, delay)
  }
}

const Search = memo(function Search({ onSearchHandler, onClickFilter }) {
  const [value, setValue] = useState('')

  const throttledHandleSearch = debounce(onSearchHandler, 1000)

  function onSearch(e) {
    setValue(e.target.value)
  }

  useEffect(() => {
    throttledHandleSearch(value)
  }, [throttledHandleSearch, value])

  return (
    <SearchComponent>
      <SearchInput type='text' value={value} onChange={onSearch} />
      <FilterWrapper>
        {CARDS_ON_PAGE.map((button, index) => {
          return (
            <FilterButton key={index} onClick={() => onClickFilter(button)}>
              {button}
            </FilterButton>
          )
        })}
      </FilterWrapper>
    </SearchComponent>
  )
})

export default Search
