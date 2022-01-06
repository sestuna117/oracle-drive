import React from "react";
import { useParams } from "react-router-dom";
import { useAppSelector } from "../../../hook";
import { getNPC } from "../../../store/slices/npcsSlice";
import "../../Page.css";
import NpcRewardsTable from "./NpcRewardsTable";
import "./NpcPage.css";
import NpcQuest from "./NpcQuest";
import NpcLocation from "./NpcLocation";
import NpcDeck from "./NpcDeck";

export default function NpcPage() {
  const { id } = useParams<{ id?: string }>();
  const npcData = useAppSelector(getNPC(id));
  console.log(npcData);

  return npcData ? (
    <div className="content">
      <div className="content-id-patch">
        <span>NPC</span>
        <span style={{ color: "#808080" }}>
          Available Since: {npcData.patch}
        </span>
      </div>
      <div className="content-top-bar" />
      <div className="npc-name">{npcData.name}</div>
      <div>rules</div>
      <div className="content-divider" />
      <NpcLocation location={npcData.location} />
      <NpcRewardsTable cards={npcData.rewards} />
      {npcData.quest ? <NpcQuest quest={npcData.quest} /> : null}
      <NpcDeck fixed_cards={npcData.fixed_cards} variable_cards={npcData.variable_cards} />
    </div>
  ) : null;
}
