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
    deleteProduct: (state, action) => {
      console.log(action);
      return state.filter((product) => product.id !== action.payload);
    },
    editProduct: (state, action) => {
      console.log(action);
      let updatableProduct = state.filter(
        (product) => product.id === action.payload
      );
      console.log(updatableProduct.entry_date);
    },
  },
});

// Action creators are generated for each case reducer function
export const { addProduct, deleteProduct, editProduct } = productSlice.actions;

export default productSlice.reducer;
