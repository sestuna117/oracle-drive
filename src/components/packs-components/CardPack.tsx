import React, { useState } from "react";
import { CardPacks } from "../../types";

export default function CardPack(props: { packData: CardPacks }) {
  const { packData } = props;
  const [isExpanded, setIsExpanded] = useState(true);

  console.log(isExpanded);

  const handleExpand = () => {
    setIsExpanded((isExpanded) => !isExpanded);
  };

  return (
    <div className="card-pack">
      <div className="pack-header">
        <span>{packData.name}</span>
        <div>
          <span>{packData.cost ? packData.cost + " MGP" : "Reward"}</span>
          <button className="dropdown-button" type={"button"} onClick={() => handleExpand()}>
            {isExpanded ? "\u25bc" : "\u25b2"}
          </button>
        </div>
      </div>
    </div>
  );
}
