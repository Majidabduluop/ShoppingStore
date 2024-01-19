import { configureStore } from "@reduxjs/toolkit";
import sliderSlice from "./sliderSlice";

const store = configureStore({
  reducer: {
    slider: sliderSlice,
  },
});
