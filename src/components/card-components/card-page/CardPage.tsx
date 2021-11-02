import React from "react";
import { useAppSelector } from "../../../hook";
import { getCard } from "../../../store/slices/cardsSlice";
import { useParams } from "react-router-dom";
import "./CardPage.css";
import CardSources from "./CardSources";
import CardPrices from "./CardPrices";
import CardHeader from "./CardHeader";

export default function CardPage() {
  const { id } = useParams<{ id?: string }>();
  const cardData = useAppSelector(getCard(id));
  console.log(cardData);

  return cardData ? (
    <div className="content">
      <div className="card-id-patch">
        <span>ID {cardData.number}</span>
        <span style={{ color: "#808080" }}>
          Available Since: {cardData.patch}
        </span>
      </div>
      <div className="content-top-bar" />
      <CardHeader cardData={cardData} />
      <div className="card-desc">{cardData.description}</div>
      <div className="content-divider" />
      <CardPrices sources={cardData.sources} sell_price={cardData.sell_price} />
      <div className="content-divider" />
      <CardSources sources={cardData.sources} />
      <div className="content-divider" />
      <div className="card-percent-owned">
        Percentage Owned: {cardData.owned}
      </div>
    </div>
  ) : null;
}
