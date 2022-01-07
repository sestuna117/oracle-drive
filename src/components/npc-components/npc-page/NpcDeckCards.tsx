import React from "react";
import { Card } from "../../../types";
import { Link } from "react-router-dom";

export default function NpcDeckCards(props: {
  title: string;
  cards: Array<Card>;
}) {
  const { title, cards } = props;
  console.log(cards);

  return (
    <div className="npc-rewards-table">
      <div className="npc-cards-title">
        <span>{title}</span>
      </div>
      <div className="npc-deck-cards">
        {cards.map((card) => (
          <div key={card.id}>
            <Link className="card-link" to={`/cards/${card.id}`} key={card.id}>
              <img src={card.image} alt={card.name} />
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
}
