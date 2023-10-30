import React, { useState } from 'react';
import './search.css';

const CARDS_ON_PAGE_SMALL = 20;
const CARDS_ON_PAGE_BIG = 40;

export default function Search({ onSearchHandler, onClickFilter }) {
  const [value, setValue] = useState('');

  function onSearch(e) {
    setValue(e.target.value);
    onSearchHandler(e.target.value);
  }

  return (
    <section className='search'>
      <input
        type='text'
        className='search-input'
        value={value}
        onChange={onSearch}
      />
      <div className='filter-wrapper'>
        <button
          onClick={() => onClickFilter(CARDS_ON_PAGE_SMALL)}
          className='filter-button'
        >
          {CARDS_ON_PAGE_SMALL}
        </button>
        <button
          onClick={() => onClickFilter(CARDS_ON_PAGE_BIG)}
          className='filter-button'
        >
          {CARDS_ON_PAGE_BIG}
        </button>
      </div>
    </section>
  );
}
