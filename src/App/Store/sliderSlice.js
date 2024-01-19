import { createSlice } from "@reduxjs/toolkit";
import { sliderData } from "../../assets/data/dummyData";

export const sliderSlice = createSlice({
  name: "slider",
  initialState: {
    value: 0,
    length: 4,
  },
  reducers: {
    nextSlide(state, action) {
      state.value = action.payload > state.length ? 0 : action.payload;
    },
    prevSlide(state, action) {
      state.value = action.payload < 0 ? state.length : action.payload;
    },
    dotSlide() {},
  },
});

export const { nextSlide, prevSlide } = sliderSlice.actions;
export default sliderSlice.reducers;
