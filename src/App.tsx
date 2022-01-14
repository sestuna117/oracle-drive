import React, { useEffect } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import "./App.css";
import { useAppDispatch, useAppSelector } from "./hook";
import CardsListPage from "./components/card-components/CardsListPage";
import NavBar from "./components/NavBar";
import CardPage from "./components/card-components/card-page/CardPage";
import {
  getLoading,
  setIsLoading,
  setNotIsLoading,
} from "./store/slices/generalSlice";
import { getCards, getNPCs, getPacks } from "./api/request.services";
import { updateCards } from "./store/slices/cardsSlice";
import { updateNPCs } from "./store/slices/npcsSlice";
import { updatePacks } from "./store/slices/packsSlice";
import LoadingSpinner from "./components/LoadingSpinner";
import NpcsListPage from "./components/npc-components/NpcsListPage";
import NpcPage from "./components/npc-components/npc-page/NpcPage";
import CardPacksPage from "./components/packs-components/CardPacksPage";

function App() {
  const dispatch = useAppDispatch();
  const loading = useAppSelector(getLoading);

  async function loadCards() {
    try {
      let res = await getCards();
      dispatch(updateCards(res.results));
    } catch (error) {
      console.log(error);
    }
  }

  async function loadNPCS() {
    try {
      let res = await getNPCs();
      dispatch(updateNPCs(res.results));
    } catch (error) {
      console.log(error);
    }
  }
  async function loadPacks() {
    try {
      let res = await getPacks();
      dispatch(updatePacks(res.results));
    } catch (error) {
      console.log(error);
    }
  }

  async function loadData() {
    dispatch(setIsLoading());
    await Promise.all([
      await loadCards(),
      await loadNPCS(),
      await loadPacks(),
    ]).then(() => dispatch(setNotIsLoading()));
  }

  useEffect(() => {
    loadData();
  }, []);

  return !loading ? (
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
              <NpcsListPage />
            </Route>
            <Route exact path="/npcs/:id">
              <NpcPage />
            </Route>
            <Route exact path="/packs">
              <CardPacksPage />
            </Route>
          </Switch>
        </div>
      </Router>
    </div>
  ) : (
    <LoadingSpinner />
  );
}

export default App;
