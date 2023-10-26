import React from "react";
import Card from "../Card/Card";
import "./cardList.css";

export default function CardList({ cards, onClickHandler, isActive }) {
  return (
    <ul className={`card-list ${isActive ? "card-list_active" : ""}`}>
      {cards?.map((card) => {
        return (
          <Card
            key={card.id + Math.random()}
            image={card.sprites.front_default}
            name={card.name}
            height={card.height}
            weight={card.weight}
            base={card.base_experience}
            handleClick={() => onClickHandler(card)}
            className='card-list__item'
          />
        );
      })}
    </ul>
  );
}
