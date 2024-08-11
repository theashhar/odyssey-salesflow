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
      const { id } = action.payload;
      let updatableProduct = state.find((product) => product.id === id);
      if (updatableProduct) {
        Object.assign(updatableProduct, action.payload);
      }
    },
  },
});

// Action creators are generated for each case reducer function
export const { addProduct, deleteProduct, editProduct } = productSlice.actions;

export default productSlice.reducer;
