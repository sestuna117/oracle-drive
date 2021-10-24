import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { RootState } from "../index";

export interface GeneralState {
  isLoading: boolean;
}

const initialState: GeneralState = {
  isLoading: true,
};

export const generalSlice = createSlice({
  name: "general",
  initialState,
  reducers: {
    setIsLoading: (state) => {
      state.isLoading = true;
    },
    setNotIsLoading: (state) => {
      state.isLoading = false;
    },
  },
});

// Action creators are generated for each case reducer function
export const { setIsLoading, setNotIsLoading } = generalSlice.actions;

export const getLoading = (state: RootState) => state.general.isLoading;

export default generalSlice.reducer;
