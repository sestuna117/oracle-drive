import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import "./App.css";
import ContextLoader from "./hook";
import CardsPage from "./components/CardsPage";
import NavBar from "./components/NavBar";

function App() {
  return (
    <ContextLoader>
      <div>
        <Router>
          <div>
            <NavBar />
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
                <div>Home</div>
              </Route>
            </Switch>
          </div>
        </Router>
      </div>
    </ContextLoader>
  );
}

export default App;
