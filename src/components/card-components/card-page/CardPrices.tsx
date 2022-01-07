import React from "react";
import { CardSource } from "../../../types";

export default function CardPrices(props: {
  sources: CardSource;
  sell_price: number;
}) {
  const { sources, sell_price } = props;
  return (
    <div className="card-market">
      <div>
        <span className="card-market-prompt">Available for Purchase: </span>
        <span>{sources.purchase ? sources.purchase + " MGP" : "No"}</span>
      </div>
      <div>
        <span className="card-market-prompt">Sells for </span>
        <span>{sell_price ? sell_price + " MGP" : "Unsellable"}</span>
      </div>
    </div>
  );
}
