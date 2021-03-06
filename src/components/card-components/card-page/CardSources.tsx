import React from "react";
import { CardSource } from "../../../types";
import { Link } from "react-router-dom";

export default function CardSources(props: { sources: CardSource }) {
  const { sources } = props;

  return (
    <div className="card-source">
      <div className="card-source-prompt">Obtained From</div>
      <div className="card-source-blocks">
        {sources.npcs.map((npc) => (
          <div key={npc.id}>
            <Link className="card-source-npc" to={`/npcs/${npc.id}`}>
              {npc.name}
            </Link>
            {" - " +
              npc.location.name +
              " (X: " +
              npc.location.x +
              ", Y: " +
              npc.location.y +
              ")"}
          </div>
        ))}
        {sources.packs.map((pack) => (
          <div key={pack.id}>{pack.name}</div>
        ))}
        {sources.drops.map((drop) => (
          <div key={drop}>{drop}</div>
        ))}
        {sources.purchase ? <div>{sources.purchase} MGP</div> : null}
      </div>
    </div>
  );
}
