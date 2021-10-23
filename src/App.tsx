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
              <Route exact path="/">
                <div>Home</div>
              </Route>
              <Route exact path="/cards">
                <CardsListPage />
              </Route>
              <Route exact path="/cards/:id">
                <CardPage />
              </Route>
              <Route exact path="/npcs">
                <div>NPCs</div>
              </Route>
              <Route exact path="/packs">
                <div>Packs</div>
              </Route>
            </Switch>
          </div>
        </Router>
      </div>
    </ContextLoader>
  );
}

export default App;
