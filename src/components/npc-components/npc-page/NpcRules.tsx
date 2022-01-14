import React from "react";
import "./NpcRules.css";

export default function NpcRules(props: { rules: Array<string> }) {
  const { rules } = props;
  return (
    <div className="npc-rules">
      <div className="npc-page-rules-list">
        <div className="npc-rules-header">Rules</div>
        {rules.map((rule, index) => (
          <div className="npc-rule" key={index}>- {rule}</div>
        ))}
      </div>
    </div>
  );
}
