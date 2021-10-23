import React, { useContext } from "react";
import { CardContext } from "../hook";
import "./CardsListPage.css";
import CardRarity from "./card-components/CardRarity";
import CardStats from "./card-components/CardStats";
import CardSources from "./card-components/CardSources";
import { Link } from "react-router-dom";

export default function CardsListPage() {
  const cardsData = useContext(CardContext);

  if (cardsData) {
    console.log(cardsData.results);
  }

  return cardsData ? (
    <div className="card-list">
      <table className="card-table">
        <thead>
          <tr>
            <th>Id</th>
            <th>Icon</th>
            <th className="cell-align-left">Name</th>
            <th>Type</th>
            <th className="cell-align-left">Rarity</th>
            <th>Stats</th>
            <th className="cell-align-left">Source</th>
            <th>Owned</th>
            <th>Patch</th>
          </tr>
        </thead>
        <tbody>
          {cardsData.results.map((card) => (
            <tr className="card-table-row" key={card.id}>
              <td>{card.id}</td>
              <td>
                <Link to={`/cards/${card.id}`}>
                  <img src={card.icon} alt={card.name + "_icon"} />
                </Link>
              </td>
              <td className="cell-align-left">
                <span>{card.name}</span>
              </td>
              <td>
                {card.type.image ? (
                  <img src={card.type.image} alt={card.type.name} />
                ) : null}
              </td>
              <td>
                <CardRarity rarity={card.stars} />
              </td>
              <td>
                <CardStats stats={card.stats} />
              </td>
              <td className="cell-align-left">
                <CardSources sources={card.sources} />
              </td>
              <td>
                <span>{card.owned}</span>
              </td>
              <td>
                <span>{card.patch}</span>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  ) : null;
}
