import React from "react";
import "./details.css";

export default function Details({ data, onClose }) {
  return (
    <div className='detail'>
      <button className='close-btn' onClick={onClose}>
        X
      </button>
      <h3 className='detail__title'>{data.name}</h3>
      <img
        src={data.sprites.other.dream_world.front_default}
        alt={data.name}
        className='detail__image'
      />
      <div className='abilities'>
        <h2 className='abilities__title'>Abilities</h2>
        <div className='ability'>
          {data.abilities.map((poke, index) => {
            return (
              <h3 key={index + Math.random()} className='ability__title'>
                {poke.ability.name}
              </h3>
            );
          })}
        </div>
      </div>
      <div className='stats'>
        {data.stats.map((poke, index) => {
          return (
            <div key={index + Math.random()} className='stats__item'>
              <h3>{poke.stat.name}:</h3>
              <p>{poke.base_stat} points</p>
            </div>
          );
        })}
      </div>
    </div>
  );
}
