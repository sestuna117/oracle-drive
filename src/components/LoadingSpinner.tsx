import React from "react";
import "./LoadingSpinner.css";
import cardSpinner from "../imgs/ttt_card_spinner.png"

export default function LoadingSpinner() {
  return <div className="loading-card">
    <img src={cardSpinner} alt={"Loading Card"}/>
  </div>;
}
