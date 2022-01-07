import React from "react";
import { CardNPCQuest } from "../../../types";
import "./NpcQuest.css";

export default function NpcQuest(props: { quest: CardNPCQuest }) {
  const { quest } = props;

  return (
    <div className="npc-content">
      <span className="npc-content-header">Prerequisite Quest</span>
      <div className="npc-quest-name"> - {quest.name}</div>
    </div>
  );
}
