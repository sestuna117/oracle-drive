import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { CardListCard } from "../../types";
import { RootState } from "../index";

export interface CardsState {
  value: Array<CardListCard> | null;
}

const initialState: CardsState = {
  value: null,
};

export const cardsSlice = createSlice({
  name: "cards",
  initialState,
  reducers: {
    updateCards: (state, action: PayloadAction<Array<CardListCard>>) => {
      state.value = action.payload;
    },
  },
});

// Action creators are generated for each case reducer function
export const { updateCards } = cardsSlice.actions;

export const getAllCards = (state: RootState) => state.cards.value;
export const getCard = (id: number) => (state: RootState) => {
  if (!state.cards.value) {
    return;
  }
  return state.cards.value.find((card) => {
    return (card.id = id);
  });
};

export default cardsSlice.reducer;
