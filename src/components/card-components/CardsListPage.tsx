import React from "react";
import { useAppSelector } from "../../hook";
import "./CardsListPage.css";
import CardRarity from "./CardRarity";
import CardValues from "./CardValues";
import CardsListSources from "./CardsListSources";
import { Link } from "react-router-dom";
import { getAllCards } from "../../store/slices/cardsSlice";

export default function CardsListPage() {
  const cardsData = useAppSelector(getAllCards);

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
          {cardsData.map((card) => (
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
                <CardValues stats={card.stats} />
              </td>
              <td className="cell-align-left">
                <CardsListSources sources={card.sources} />
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
