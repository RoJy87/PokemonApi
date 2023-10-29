import React from 'react';
import Card from '../Card/Card';
import './cardList.css';

export default function CardList({
  cards,
  onClickHandler,
  isActive,
  isLoading,
}) {
  return isLoading ? (
    <h1>Загрузка...</h1>
  ) : (
    <ul className={`card-list ${isActive ? 'card-list_active' : ''}`}>
      {cards?.map((card) => {
        return (
          <Card
            key={card.name}
            name={card.name}
            handleClick={() => onClickHandler(card)}
            className='card-list__item'
          />
        );
      })}
    </ul>
  );
}
