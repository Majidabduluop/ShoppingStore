import { createSlice } from "@reduxjs/toolkit";

export const basketslice = createSlice({
  name: "cart",
  initialState: {
    cart: [],
    totalamount: 0,
    totalprice: 0,
  },
  reducers: {
    addtocart(state, action) {
      const productId = action.payload;
      const existindex = state.cart.findIndex(
        (item) =>
          item.id === productId.id &&
          item.size === productId.size &&
          item.color === productId.color
      );
      if (existindex !== -1) {
        state.cart = state.cart.map((item, index) =>
          index === existindex
            ? {
                ...item,
                amount: item.amount + 1,
                totalPrice: item.totalPrice + productId.totalPrice,
              }
            : item
        );
      } else {
        state.cart.push({
          id: productId.id,
          price: productId.price,
          size: productId.size,
          amount: productId.amount,
          img: productId.img,
          totalPrice: productId.price,
          name: productId.name,
          text: productId.text,
          color: productId.color,
        });
        state.totalamount++;
        state.totalprice += productId.price;
      }
    },

    Remove(state, action) {
      const productId = action.payload;

      console.log(productId);

      state.cart = state.cart.filter((data) => data.id != productId);
      state.totalamount = state.cart.reduce(
        (total, item) => total + item.amount,
        0
      );
      state.totalprice = state.cart.reduce(
        (total, item) => total + item.totalPrice,
        0
      );
    },
  },
});

export const { addtocart, Remove } = basketslice.actions;
export default basketslice.reducer;
