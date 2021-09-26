import React from "react";
import { Link } from "react-router-dom";
import "./NavBar.css";

export default function NavBar() {
  return (
    <nav className="navbar">
      <ul className="navbar-list">
        <li className="navbar-list-item">
          <Link to="/">Home</Link>
        </li>
        <li className="navbar-list-item">
          <Link to="/cards">Cards</Link>
        </li>
        <li className="navbar-list-item">
          <Link to="/npcs">NPCs</Link>
        </li>
        <li className="navbar-list-item">
          <Link to="/packs">Packs</Link>
        </li>
      </ul>
    </nav>
  );
}
