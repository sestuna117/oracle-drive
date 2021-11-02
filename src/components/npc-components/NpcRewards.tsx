import React from "react";
import { Card } from "../../types";
import { Link } from "react-router-dom";
import "./NpcRewards.css";

export default function NpcRewards(props: { cards: Array<Card> }) {
  const { cards } = props;

  return (
    <div className="npc-rewards-list">
      {cards.map((card) => (
        <Link className='card-link'  to={`/cards/${card.id}`} key={card.id}>
          <img src={card.icon} alt={card.name} />
        </Link>
      ))}
    </div>
  );
}
