import { configureStore } from "@reduxjs/toolkit";
import { kanbanAPISlice, kanbanBoardState } from "./slice";

export const store = configureStore({
  reducer: {
    kanbanBoardState: kanbanBoardState.reducer,
    [kanbanAPISlice.reducerPath]: kanbanAPISlice.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: false,
    }).concat(kanbanAPISlice.middleware),
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
