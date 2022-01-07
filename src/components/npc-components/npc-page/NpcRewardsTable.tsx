import React from "react";
import { Card } from "../../../types";
import { Link } from "react-router-dom";
import "./NpcRewardsTable.css";

export default function NpcRewardsTable(props: { cards: Array<Card> }) {
  const { cards } = props;

  return (
    <div className="npc-content">
      <span className="npc-content-header">Rewards</span>
      <table className="npc-rewards-table">
        <thead>
          <tr>
            <th colSpan={2}>Potential Rewards</th>
          </tr>
        </thead>
        <tbody>
          {cards.map((card) => (
            <tr key={card.id}>
              <td className="npc-rewards-icon">
                <Link
                  className="card-link"
                  to={`/cards/${card.id}`}
                  key={card.id}
                >
                  <img src={card.icon} alt={card.name} />
                </Link>
              </td>
              <td>
                <Link
                  className="npc-rewards-link"
                  to={`/cards/${card.id}`}
                  key={card.id}
                >
                  {card.name}
                </Link>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
