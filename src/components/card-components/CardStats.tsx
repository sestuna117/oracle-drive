import React from "react";
import "./CardStats.css";

export default function CardStats(props: {
  stats: {
    numeric: { top: number; right: number; bottom: number; left: number };
    formatted: {
      top: number | string;
      right: number | string;
      bottom: number | string;
      left: number | string;
    };
  };
}) {
  const { stats } = props;
  return (
    <div className="card-stats">
      <div className="card-stats-row">
        <span>{stats.formatted.top}</span>
      </div>
      <div className="card-stats-row">
        <span>{stats.formatted.left}</span>
        <span>{stats.formatted.right}</span>
      </div>
      <div className="card-stats-row">
        <span>{stats.formatted.bottom}</span>
      </div>
    </div>
  );
}
