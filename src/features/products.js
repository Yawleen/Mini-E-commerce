import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  items: undefined,
};

export const products = createSlice({
  name: "products",
  initialState,
  reducers: {
    addProducts: (state, action) => {
      state.items = action.payload;
    },
  },
  extraReducers: {
    ["cart/addToCart"]: (state, action) => {
      state.items.find((item) => item.id === action.payload.id).picked = true;
    },
    ["cart/removeFromCart"]: (state, action) => {
      state.items.find((item) => item.id === action.payload.id).picked = false;
    },
  },
});

export function getProductsList(action) {
  return function (dispatch, getState) {
    fetch("/site-portfolio/projets/projets-react/Mini-E-commerce/data/inventory.json")
      .then((data) => data.json())
      .then((data) => dispatch(addProducts(data.products)));
  };
}

export const { addProducts } = products.actions;
export default products.reducer;
