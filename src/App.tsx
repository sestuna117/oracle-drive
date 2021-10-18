import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import "./App.css";
import ContextLoader from "./hook";
import CardsListPage from "./components/CardsListPage"
import NavBar from "./components/NavBar";
import CardPage from "./components/card-page/CardPage";

function App() {
  return (
    <ContextLoader>
      <div>
        <Router>
          <div>
            <NavBar />
            <Switch>
              <Route path="/cards">
                <CardsListPage />
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
              <Route path="/cards/:id">
                <CardPage />
              </Route>
            </Switch>
          </div>
        </Router>
      </div>
    </ContextLoader>
  );
}

export default App;
