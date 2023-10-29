import React, { useEffect, useState } from 'react';
import CardList from '../../component/CardList/CardList';
import { getAllCards, getCard } from '../../api/cardsApi';

export default function Main() {
  const [pokemons, setPokemons] = useState([]);
  const [pokemon, setPokemon] = useState({});
  const [onPageNumber, setOnPageNumber] = useState(30);
  const [isActive, setIsActive] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  async function getAllPokemons(cardsNumber) {
    try {
      setIsLoading(true);
      const pokemons = await getAllCards(cardsNumber);
      pokemons.forEach((poke) => {
        setPokemons((prev) => {
          const isExist = prev.some((item) => item.name === poke.name);
          if (!isExist) {
            return [...prev, poke];
          }
          return prev;
        });
        setIsLoading(false);
      });
    } catch (error) {
      console.log(error);
    }
  }

  async function getPokemon(name) {
    try {
      const pokemon = await getCard(name);
      setPokemon(pokemon);
    } catch (error) {
      console.log(error);
    }
  }

  useEffect(() => {
    getAllPokemons(onPageNumber);
  }, []);

  return (
    <section>
      <CardList
        isActive={isActive}
        cards={pokemons}
        isLoading={isLoading}
        onClickHandler={(card) => {
          getPokemon(card.name);
          setIsActive(true);
        }}
      />
    </section>
  );
}
