import { configureStore } from "@reduxjs/toolkit";
import rootReducer from "src/store/root-reducer";

const rootStore = configureStore({
  reducer: rootReducer,
  devTools: process.env.ENVIRONMENT !== "production",
});

export { rootStore };

