import React from 'react';
import CardList from '../../component/CardList/CardList';
import Details from '../../component/Details/Details';

export default function CardInfo({ pokemon, isLoading }) {
  return (
    <section>
      <CardList />
      <Details
        card={pokemon}
        isLoading={isLoading}
      />
    </section>
  );
}
