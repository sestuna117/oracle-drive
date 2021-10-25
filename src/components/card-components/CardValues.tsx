import React from "react";
import "./CardValues.css";

export default function CardValues(props: {
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
    <div className="card-values">
      <div className="card-values-row">
        <span>{stats.formatted.top}</span>
      </div>
      <div className="card-values-row">
        <span>{stats.formatted.left}</span>
        <span>{stats.formatted.right}</span>
      </div>
      <div className="card-values-row">
        <span>{stats.formatted.bottom}</span>
      </div>
    </div>
  );
}
