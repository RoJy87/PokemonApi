import React from 'react';
import './details.css';

export default function Details({ pokemon }) {
  console.log(pokemon);
  return (
    <div className='detail'>
      <h3 className='detail__title'>{pokemon.name}</h3>
      <img
        src={pokemon.sprites?.other?.dream_world.front_default}
        alt={pokemon.name}
        className='detail__image'
      />
      <div className='abilities'>
        <h2 className='abilities__title'>Abilities</h2>
        <div className='ability'>
          {pokemon.abilities.map((poke, index) => {
            return (
              <p
                key={index}
                className='ability__title'
              >
                {poke.ability.name}
              </p>
            );
          })}
        </div>
      </div>
      <div className='stats'>
        {pokemon.stats.map((poke, index) => {
          return (
            <div
              key={index}
              className='stats__item'
            >
              <h3>{poke.stat.name}:</h3>
              <p>{poke.base_stat} points</p>
            </div>
          );
        })}
      </div>
    </div>
  );
}
