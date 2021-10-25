import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { NPCListNPC } from "../../types";
import { RootState } from "../index";

export interface NPCsState {
  value: Array<NPCListNPC> | null;
}

const initialState: NPCsState = {
  value: null,
};

export const npcsSlice = createSlice({
  name: "npc",
  initialState,
  reducers: {
    updateNPCs: (state, action: PayloadAction<Array<NPCListNPC>>) => {
      state.value = action.payload;
    },
  },
});

// Action creators are generated for each case reducer function
export const { updateNPCs } = npcsSlice.actions;

export const getAllNPCs = (state: RootState) => state.npcs.value;

export default npcsSlice.reducer;
