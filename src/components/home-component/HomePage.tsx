import React from "react";
import "./HomePage.css";

export default function HomePage() {
  return (
    <div className="content">
      <div className="welcome-header">Welcome to </div>
      <div className="welcome-message">
        <div>
          This is a simple website that allows you to find the sources and keep
          track of Triple Triad cards in Final Fantasy XIV. You can also see and
          made public decks that you and others have created for faces specific
          opponents.
        </div>
      </div>
      <div className="welcome-summary">In other words, a Triple Triad Tracker!</div>
      <div className="content-top-bar" />
      <div className="welcome-footer">
        <div>
          If I had a message about supporting me and this site I would put it
          here but I don't so eh.
        </div>
        <div>I hope this tool helps. Now it's time to D-D-D-D-D-D-D-Duel!!</div>
      </div>
    </div>
  );
}
