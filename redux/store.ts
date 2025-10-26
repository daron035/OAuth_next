import { configureStore } from "@reduxjs/toolkit";

const dummyReducer = (state = {}) => state;

export const store = configureStore({
  reducer: {
    dummy: dummyReducer,
  },
  middleware: (getDefaultMiddleware) => getDefaultMiddleware(),
  devTools: process.env.NODE_ENV !== "production",
});

export type RootStore = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
