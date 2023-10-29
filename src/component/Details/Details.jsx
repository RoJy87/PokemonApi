import React from 'react';
import './details.css';

export default function Details({ card, isLoading }) {
  return isLoading ? (
    <h1>Загрузка...</h1>
  ) : (
    <div className='detail'>
      <h3 className='detail__title'>{card.name}</h3>
      <img
        src={card.sprites.other.dream_world.front_default}
        alt={card.name}
        className='detail__image'
      />
      <div className='abilities'>
        <h2 className='abilities__title'>Abilities</h2>
        <div className='ability'>
          {card.abilities.map((poke, index) => {
            return (
              <h3
                key={index + Math.random()}
                className='ability__title'>
                {poke.ability.name}
              </h3>
            );
          })}
        </div>
      </div>
      <div className='stats'>
        {card.stats.map((poke, index) => {
          return (
            <div
              key={index + Math.random()}
              className='stats__item'>
              <h3>{poke.stat.name}:</h3>
              <p>{poke.base_stat} points</p>
            </div>
          );
        })}
      </div>
    </div>
  );
}
