import React from "react";
import { useAppSelector } from "../../hook";
import { getAllPacks } from "../../store/slices/packsSlice";
import "./CardPacksPage.css";
import CardPack from "./CardPack";

export default function CardPacksPage() {
  const packsData = useAppSelector(getAllPacks);
  console.log(packsData);

  return packsData ? (
    <div>
      <div className="packs-list">
        {packsData.map((pack) => (
          <CardPack key={pack.id} packData={pack} />
        ))}
      </div>
    </div>
  ) : null;
}
