import React from "react";
import "./card.css";

export default function Card({
  image,
  name,
  height,
  weight,
  base,
  handleClick,
}) {
  return (
    <li className={`card`}>
      <h3 className='card__title'>{name}</h3>
      <div className='card__description'>
        <img src={image} alt={name} className='card__image' />
        <div className='card-wrapper'>
          <div className='card-stat'>
            <p className='card-stat__name'>Рост</p>
            <p className='card-stat__data'>{height}</p>
          </div>
          <div className='card-stat'>
            <p className='card-stat__name'>Вес</p>
            <p className='card-stat__data'>{weight}</p>
          </div>
          <div className='card-stat'>
            <p className='card-stat__name'>Базовый опыт</p>
            <p className='card-stat__data'>{base}</p>
          </div>
        </div>
      </div>
      <button className='card__button' onClick={handleClick}>
        Подробнее
      </button>
    </li>
  );
}
