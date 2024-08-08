import { createSlice } from "@reduxjs/toolkit";
import products from "../../data/products.json";

export const productSlice = createSlice({
  name: "product",
  initialState: products,
  reducers: {
    addProduct: (state, action) => {
      //   console.log(action);
      state.push(action.payload);
    },
    deleteProduct: (state) => {
      state.value -= 1;
    },
    editProduct: (state, action) => {
      state.value += action.payload;
    },
  },
});

// Action creators are generated for each case reducer function
export const { addProduct, deleteProduct, editProduct } = productSlice.actions;

export default productSlice.reducer;
