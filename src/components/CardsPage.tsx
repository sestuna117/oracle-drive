import React, { useContext } from "react";
import { CardContext } from "../hook";
import "./CardsPage.css";

export default function CardsPage() {
  const cardsData = useContext(CardContext);
  console.log(cardsData);

  if (cardsData) {
    console.log(cardsData.results);
  }

  return cardsData ?
      <div className="card-list">
          <table className="card-table">
              <thead>
                <tr>
                    <th>Id</th>
                    <th className="cell-align-left">Name</th>
                    <th>Type</th>
                    <th>Rarity</th>
                    <th>Stats</th>
                    <th className="cell-align-left">Source</th>
                    <th>Owned</th>
                    <th>Patch</th>
                </tr>
              </thead>
              <tbody>
              {cardsData.results.map(card => (
                  <tr className="card-table-row" key={card.id}>
                      <td><img src={card.icon} alt={card.name +"_icon"}/></td>
                      <td className="cell-align-left"><span>{card.name}</span></td>
                      <td>type</td>
                      <td><span>{card.stars}</span></td>
                      <td>stats</td>
                      <td className="cell-align-left">source</td>
                      <td><span>{card.owned}</span></td>
                      <td><span>{card.patch}</span></td>
                  </tr>
              ))}
              </tbody>
          </table>
      </div> : null;
}
