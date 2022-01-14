import React from "react";
import { NPC } from "../../../types";

export default function NpcHeader(props: { npcData: NPC }) {
  const { npcData } = props;

  return (
    <div className="card-header">
      <div className="card-info">
        <div className="card-title">
          <div>
            <div className="card-name">{npcData.name}</div>
          </div>
          <span className="card-rarity-span">
            Difficulty: {npcData.difficulty}
          </span>
        </div>
      </div>
    </div>
  );
}
