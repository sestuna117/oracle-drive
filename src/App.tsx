import React from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import "./App.css";
import ContextLoader from "./hook";
import CardsPage from "./components/CardsPage";

function App() {

  return (
    <ContextLoader>
      <Router>
        <div>
          <nav>
            <ul>
              <li>
                <Link to="/">Home</Link>
              </li>
              <li>
                <Link to="/about">Cards</Link>
              </li>
              <li>
                <Link to="/users">NPCs</Link>
              </li>
              <li>
                <Link to="/users">Packs</Link>
              </li>
            </ul>
          </nav>

          {/* A <Switch> looks through its children <Route>s and
            renders the first one that matches the current URL. */}
          <Switch>
            <Route path="/cards">
              <CardsPage />
            </Route>
            <Route path="/npcs">
              <div>NPCs</div>
            </Route>
            <Route path="/packs">
              <div>Packs</div>
            </Route>
            <Route path="/">
              <CardsPage />
            </Route>
          </Switch>
        </div>
      </Router>
    </ContextLoader>
  );
}

export default App;
