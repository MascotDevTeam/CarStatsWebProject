import { configureStore } from "@reduxjs/toolkit";
import carsReducer from "./carsSlice";

const store = configureStore({
  reducer: {
    carsState: carsReducer,
  },
});

export default store;
