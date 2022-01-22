import React, { useState } from "react";
import { CardPacks } from "../../types";
import { Link } from "react-router-dom";
import CardRarity from "../card-components/CardRarity";
import CardValues from "../card-components/CardValues";

export default function CardPack(props: { packData: CardPacks }) {
  const { packData } = props;
  const [isExpanded, setIsExpanded] = useState(true);

  const handleExpand = () => {
    setIsExpanded((isExpanded) => !isExpanded);
  };

  return (
    <div className="card-pack">
      <div className="pack-header" onClick={() => handleExpand()}>
        <span style={{ paddingLeft: 5 }}>{packData.name}</span>
        <div>
          <span>{packData.cost ? packData.cost + " MGP" : "Reward"}</span>
          <button className="dropdown-button">
            {isExpanded ? "\u25bc" : "\u25b2"}
          </button>
        </div>
      </div>
      {isExpanded ? (
        <div>
          <div className="content-top-bar" />
          <table className="card-pack-table">
            <thead>
              <tr>
                <th>Icon</th>
                <th>Name</th>
                <th className="card-pack-header">Type</th>
                <th className="card-pack-header-rarity">Rarity</th>
                <th className="card-pack-header">Stats</th>
              </tr>
            </thead>
            <tbody>
              {packData.cards.map((card) => (
                <tr className="card-table-row" key={card.id}>
                  <td className="card-pack-cell" style={{ width: 45 }}>
                    <Link to={`/cards/${card.id}`}>
                      <img src={card.icon} alt={card.name + "_icon"} />
                    </Link>
                  </td>
                  <td className="cell-align-left">
                    <Link
                      className="card-pack-card-name"
                      to={`/cards/${card.id}`}
                    >
                      <span>{card.name}</span>
                    </Link>
                  </td>
                  <td className="card-pack-cell">
                    {card.type.image ? (
                      <img src={card.type.image} alt={card.type.name} />
                    ) : null}
                  </td>
                  <td className="card-pack-cell">
                    <CardRarity rarity={card.stars} />
                  </td>
                  <td>
                    <CardValues stats={card.stats} />
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      ) : null}
    </div>
  );
}
