import { createSlice } from "@reduxjs/toolkit";
import productline from "../../data/productline.json";

export const productLineSlice = createSlice({
  name: "productline",
  initialState: productline,
  reducers: {
    addProductline: (state, action) => {
      console.log(action.payload);
      let newPL = action.payload;
      if (state.indexOf(newPL.toLowerCase()) === -1) {
        state.push(newPL);
      }
    },
    deleteProductline: (state, action) => {
      console.log(action);
      return state.filter((client) => client.id !== action.payload);
    },
  },
});

// Action creators are generated for each case reducer function
export const { addProductline, deleteProductline } = productLineSlice.actions;

export default productLineSlice.reducer;
