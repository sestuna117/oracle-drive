import React from "react";
import "./NpcRules.css";

export default function NpcRules(props: { rules: Array<string> }) {
  const { rules } = props;

  return (
    <div className="npc-rules-list">
      {rules.map((rule) => (
        <span key={rule}>{rule}</span>
      ))}
    </div>
  );
}
