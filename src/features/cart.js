import { createSlice } from "@reduxjs/toolkit";

const initialState = [];

export const cart = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addToCart: (state, action) => {
      const itemIndex = state.findIndex(
        (item) => item.id === action.payload.id
      );

      if (itemIndex === -1) {
        state.push({ ...action.payload, quantity: 1 });
      }
    },
    modifyQuantity: (state, action) => {
      state.find((item) => item.id === action.payload.id).quantity =
        action.payload.quantity;
    },
    removeFromCart: (state, action) => {
      const indexToRemove = state.findIndex(
        (item) => item.id === action.payload.id
      );

      state.splice(indexToRemove, 1);
    },
  },
});

export const { addToCart, modifyQuantity, removeFromCart } = cart.actions;
export default cart.reducer;
