import React from 'react';
import CardList from '../../component/CardList/CardList';
import Search from '../../component/Search/Search';
import PaginationButton from '../../component/PaginationButton/PaginationButton';

export default function Main({
  pokemons,
  isLoading,
  isActive,
  onSearchHandler,
  onClickFilter,
  onPaginationHandler,
}) {
  return (
    <>
      <Search
        onSearchHandler={onSearchHandler}
        onClickFilter={onClickFilter}
      />
      <CardList
        isActive={isActive}
        cards={pokemons}
        isLoading={isLoading}
      />
      <div className='pagination'>
        <PaginationButton
          className='pagination-btn'
          name='Назад'
          onClick={onPaginationHandler}
        />
        <PaginationButton
          className='pagination-btn'
          name='Вперед'
          onClick={onPaginationHandler}
        />
      </div>
    </>
  );
}
