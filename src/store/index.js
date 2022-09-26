import { configureStore } from "@reduxjs/toolkit";
import counterSlice from "./Cart";

export const store = configureStore({
  reducer: counterSlice.reducer,
});
