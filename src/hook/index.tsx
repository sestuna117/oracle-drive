import React, { useEffect, useState } from "react";
import { getCards, getNPCs, getPacks } from "../api/request.services";
import {APIData, CardListCard, CardPack, NPCListNPC} from "../types";
import {Nullable} from "../utils/nullable";
import LoadingSpinner from "../components/LoadingSpinner";

export const CardContext = React.createContext<Nullable<APIData<CardListCard>>>(undefined);
export const NPCContext = React.createContext<Nullable<APIData<NPCListNPC>>>(undefined);
export const PackContext = React.createContext<Nullable<APIData<CardPack>>>(undefined);

type Props = {
  children: React.ReactNode;
};

export default function ContextLoader({ children }: Props) {
  const [isLoaded, setIsLoaded] = useState(false);
  const [cards, setCards] = useState();
  const [npcs, setNPCs] = useState();
  const [packs, setPacks] = useState();

  async function loadCards() {
    try {
      let res = await getCards();
      setCards(res);
    } catch (error) {
      console.log(error);
    }
  }
  async function loadNPCS() {
    try {
      let res = await getNPCs();
      setNPCs(res);
    } catch (error) {
      console.log(error);
    }
  }
  async function loadPacks() {
    try {
      let res = await getPacks();
      setPacks(res);
    } catch (error) {
      console.log(error);
    }
  }

  async function loadData() {
    setIsLoaded(false);

    await Promise.all([await loadCards(), await loadNPCS(), await loadPacks()]);

    setIsLoaded(true);
  }

  useEffect(() => {
    loadData();
  }, []);

  return (
    <CardContext.Provider value={cards}>
      <NPCContext.Provider value={npcs}>
        <PackContext.Provider value={packs}>
          {isLoaded ? children : <LoadingSpinner />}
        </PackContext.Provider>
      </NPCContext.Provider>
    </CardContext.Provider>
  );
}
