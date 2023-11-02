import React, { memo } from 'react'
import { LimitButton, LimitCards, NavComponent, SearchInput } from './styled'

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
  console.log('Search', 'rerender')

  const debounceHandleSearch = debounce(onSearchHandler, 1000)

  function onSearch(e) {
    debounceHandleSearch(e.target.value)
  }

  return (
    <NavComponent>
      <SearchInput type='text' onChange={onSearch} />
      <LimitCards>
        {CARDS_ON_PAGE.map((button, index) => {
          return (
            <LimitButton key={index} onClick={() => onClickFilter(button)}>
              {button}
            </LimitButton>
          )
        })}
      </LimitCards>
    </NavComponent>
  )
})

export default Search
