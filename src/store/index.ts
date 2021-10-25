import { configureStore } from "@reduxjs/toolkit";
import cardsReducer from "./slices/cardsSlice";
import generalReducer from "./slices/generalSlice";
import packsReducer from "./slices/packsSlice";
import npcsReducer from "./slices/npcsSlice"

export const store = configureStore({
  reducer: {
    general: generalReducer,
    cards: cardsReducer,
    npcs: npcsReducer,
    packs: packsReducer,
  },
});

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>;
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch;
