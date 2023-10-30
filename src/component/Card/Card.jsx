import React from 'react';
import poke from '../../image/icons8-покемон-96.png';
import './card.css';
import { useNavigate } from 'react-router-dom';

export default function Card({ name }) {
  const navigate = useNavigate();
  return (
    <li className={`card`}>
      <h3 className='card__title'>{name}</h3>
      <div className='card__description'>
        <img
          src={poke}
          alt='Иконка покемона'
          className='card__image'
        />
      </div>
      <button
        replace='true'
        className='card__button'
        onClick={() => navigate(`details/${name}`, { replace: true })}
      >
        Подробнее
      </button>
    </li>
  );
}
