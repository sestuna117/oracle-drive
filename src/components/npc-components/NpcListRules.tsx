import React from "react";
import "./NpcListRules.css";

export default function NpcListRules(props: { rules: Array<string> }) {
  const { rules } = props;

  return (
    <div className="npc-rules-list">
      {rules.map((rule) => (
        <span key={rule}>{rule}</span>
      ))}
    </div>
  );
}
