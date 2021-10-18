import React from "react";
import { CardSource } from "../../types";
import "./CardSource.css";

export default function CardSources(props: { sources: CardSource }) {
  const { sources } = props;

  return (
    <div className="card-source-list">
      {sources.npcs.map((npc) => (
        <div key={npc.id}>{npc.name}</div>
      ))}
      {sources.packs.map((pack) => (
        <div key={pack.id}>{pack.name}</div>
      ))}
      {sources.drops.map((drop) => (
        <div key={drop}>{drop}</div>
      ))}
      {sources.purchase ? <div>{sources.purchase + " MPG"}</div> : null}
    </div>
  );
}
