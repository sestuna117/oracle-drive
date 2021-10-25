import React from "react";
import CardRarity from "../CardRarity";
import CardValues from "../CardValues";
import { Card } from "../../../types";

export default function CardHeader(props: { cardData: Card }) {
  const { cardData } = props;
  return (
    <div className="card-header">
      <img className="card-image" src={cardData.image} alt={cardData.name} />
      <div className="card-info">
        <div className="card-title">
          <div>
            <div className="card-name">{cardData.name}</div>
            <div className="card-stats">
              <div>Stats: </div>
              <CardValues stats={cardData.stats} />
            </div>
          </div>
          <div className="card-title-right">
            <div className="card-rarity-block">
              <span className="card-rarity-span">Card Rarity: </span>
              <CardRarity rarity={cardData.stars} />
            </div>
            <div>
              <span>Card Rarity: {cardData.type.name}</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
