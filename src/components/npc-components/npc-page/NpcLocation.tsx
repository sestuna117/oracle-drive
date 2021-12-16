import React from "react";
import { NPCLocation } from "../../../types";
import "./NpcLocation.css";

export default function NpcLocation(props: { location: NPCLocation }) {
  const { location } = props;

  return (
    <div className="npc-content">
      <span className="npc-content-header">Location</span>
      <div className="npc-location-name">{`${location.name} X: ${location.x} Y: ${location.y}`}</div>
    </div>
  );
}
