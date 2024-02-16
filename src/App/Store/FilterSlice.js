import { createSlice } from "@reduxjs/toolkit";
import { storeData } from "../../assets/data/dummyData";

export const productsSlice = createSlice({
  name: "product",
  initialState: {
    filteredProducts:
      JSON.parse(sessionStorage.getItem("filteredData")) || storeData,
    filteritems: JSON.parse(sessionStorage.getItem("filterItems")),
    error: false,
  },
  reducers: {
    filterProducts(state, action) {
      try {
        const filter = storeData.filter((item) => item.type === action.payload);

        state.filteredProducts = filter;
        const saveState = JSON.stringify(filter);
        sessionStorage.setItem("filteredData", saveState);
      } catch (err) {
        return err;
      }
    },

    singleproduct(state, action) {
      const filterdetail = storeData.filter(
        (item) => item.id === action.payload
      );
      state.filteredProducts = filterdetail;
      const saveState = JSON.stringify(filterdetail);
      sessionStorage.setItem("filteredData", saveState);
    },

    gender(state, action) {
      const genderproduct = state.filteredProducts.filter(
        (item) => item.gender === action.payload
      );

      if (genderproduct.length !== 0) {
        state.error = false;
        state.filteritems = genderproduct;
        const savedata = JSON.stringify(genderproduct);
        sessionStorage.setItem("filterItems", savedata);
      } else {
        state.error = true;
        state.filteritems = [];
      }
    },

    sizes(state, action) {
      const productsize = state.filteritems.filter((item) =>
        item.size.includes(action.payload)
      );

      if (productsize.length !== 0) {
        state.error = false;
        state.filteritems = productsize;
        const savedata = JSON.stringify(productsize);
        sessionStorage.setItem("filterItems", savedata);
      } else {
        state.error = true;
        state.filteritems = [];
      }
    },

    colors(state, action) {
      const productcolor = state.filteritems.filter((item) =>
        item.color.includes(action.payload)
      );

      if (productcolor.length !== 0) {
        state.error = false;
        state.filteritems = productcolor;
        const savedata = JSON.stringify(productcolor);
        sessionStorage.setItem("filterItems", savedata);
      } else {
        state.error = true;
        state.filteritems = [];
      }
    },

    clearFilter(state, action) {
      state.filteritems = null;
      state.error = false;
      sessionStorage.removeItem("filterItems");
    },
  },
});

export const {
  filterProducts,
  singleproduct,
  gender,
  clearFilter,
  sizes,
  colors,
} = productsSlice.actions;
export default productsSlice.reducer;
