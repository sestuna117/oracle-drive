import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { CardPacks } from "../../types";
import { RootState } from "../index";

export interface PacksState {
  value: Array<CardPacks> | null;
}

const initialState: PacksState = {
  value: null,
};

export const packsSlice = createSlice({
  name: "packs",
  initialState,
  reducers: {
    updatePacks: (state, action: PayloadAction<Array<CardPacks>>) => {
      state.value = action.payload;
    },
  },
});

// Action creators are generated for each case reducer function
export const { updatePacks } = packsSlice.actions;

export const getAllPacks = (state: RootState) => state.packs.value;

export default packsSlice.reducer;
