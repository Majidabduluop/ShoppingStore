import { configureStore } from "@reduxjs/toolkit";
import sliderReducer from "./sliderSlice";
import productsSlice from "./FilterSlice";
import basketslice from "./CartSlice";

const store = configureStore({
  reducer: {
    slider: sliderReducer,
    products: productsSlice,
    basket: basketslice,
  },
});

export default store;
