import React, { useEffect, useState } from 'react';
import Details from '../../component/Details/Details';
import CardList from '../../component/CardList/CardList';
import './cardInfo.css';
import { useLocation, useParams } from 'react-router-dom';
import { getCard } from '../../api/cardsApi';

export default function CardInfo({ pokemons, isLoading }) {
  const [pokemon, setPokemon] = useState({});
  const [isActive, setIsActive] = useState(false);
  const name = useParams().nameId;

  async function getPokemon(name) {
    // setIsLoading(true);
    try {
      const newPoke = await getCard(name);
      setPokemon(newPoke);
      setIsActive(true);
    } catch (error) {
      console.log(error);
    }
    // setIsLoading(false);
  }

  useEffect(() => {
    getPokemon(name);
  }, [name]);

  if (!Object.keys(pokemon).length) return <h1>Загрузка...</h1>;

  return (
    <section className='card-info'>
      <CardList
        isActive={isActive}
        cards={pokemons}
        isLoading={isLoading}
      />
      <Details pokemon={pokemon} />
    </section>
  );
}
