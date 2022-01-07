import React from "react";
import { useAppSelector } from "../../hook";
import { getAllNPCs } from "../../store/slices/npcsSlice";
import { Link } from "react-router-dom";
import NpcRewards from "./NpcRewards";
import NpcRules from "./NpcRules";

export default function NpcsListPage() {
  const npcsData = useAppSelector(getAllNPCs);
  console.log(npcsData);

  return npcsData ? (
    <div className="npc-list">
      <table className="table">
        <thead>
          <tr>
            <th className="cell-align-left">Name</th>
            <th className="cell-align-left">Location</th>
            <th>Difficulty</th>
            <th className="cell-align-left">Cards</th>
            <th className="cell-align-left">Rules</th>
            <th>Patch</th>
          </tr>
        </thead>
        <tbody>
          {npcsData.map((npc) => (
            <tr className="card-table-row" key={npc.id}>
              <td className="cell-align-left">
                <Link className="table-item-name" to={`/npcs/${npc.id}`}>
                  <span>{npc.name}</span>
                </Link>
              </td>
              <td className="cell-align-left">
                {npc.location.name +
                  " (X: " +
                  npc.location.x +
                  " Y: " +
                  npc.location.y +
                  ")"}
              </td>
              <td>{npc.difficulty}</td>
              <td className="cell-align-left">
                <NpcRewards cards={npc.rewards} />
              </td>
              <td>
                <NpcRules rules={npc.rules} />
              </td>
              <td>{npc.patch}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  ) : null;
}
