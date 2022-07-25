import { configureStore } from "@reduxjs/toolkit";
import basketReducer from "./features/basketSlice.js";
import restaurantReducer from "./features/restaurantSlice.js";

export const store = configureStore({
  reducer: {
    basket: basketReducer,
    restaurant: restaurantReducer,
  },
});
