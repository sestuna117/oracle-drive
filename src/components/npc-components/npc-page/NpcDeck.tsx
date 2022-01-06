import React from "react";
import { Card } from "../../../types";
import "./NpcDeckCards.css";
import NpcDeckCards from "./NpcDeckCards";

export default function NpcDeck(props: {
  fixed_cards: Array<Card>;
  variable_cards: Array<Card>;
}) {
  const { fixed_cards, variable_cards } = props;

  return (
    <div className="npc-content">
      <span className="npc-content-header">Deck</span>
      <NpcDeckCards title={"Fixed Cards"} cards={fixed_cards} />
      <div className="content-divider" />
      <NpcDeckCards title={"Variable Cards"} cards={variable_cards} />
    </div>
  );
}
