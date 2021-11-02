import React from "react";
import { useParams } from "react-router-dom";
import { useAppSelector } from "../../../hook";
import { getNPC } from "../../../store/slices/npcsSlice";
import "../../Page.css";

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
        <div className='npc-name'>{npcData.name}</div>
      <div className="content-divider" />
      <div className="content-divider" />
      <div className="content-divider" />
    </div>
  ) : null;
}
