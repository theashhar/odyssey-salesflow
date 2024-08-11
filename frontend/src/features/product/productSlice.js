import { createSlice, current } from "@reduxjs/toolkit";
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
      console.log(action.payload);
      const { id, follow_up_date, lead_status, remark } = action.payload;
      let updatableProduct = state.find((product) => product.id === id);
      if (updatableProduct) {
        // Object.assign(updatableProduct, action.payload);
        updatableProduct.follow_up.push({
          follow_up_date: follow_up_date,
          lead_status: lead_status,
          remark: remark,
        });
      }
    },
    filterProductStatus: (state, action) => {
      console.log(action);
      console.log(current(state));
      // state = action.type === "product/filterProductStatus" ? products : state;
      // state = products;
      return state.filter((product) =>
        action.payload === "all"
          ? product.status === "active"
          : product.lead_status.toLowerCase() === action.payload
      );
    },
    filterProductLine: (state, action) => {
      console.log(action);
      console.log(current(state));
      // state = action.type === "product/filterProductLine" ? products : state;
      // state = products;
      return state.filter((product) =>
        action.payload === "all"
          ? product.status === "active"
          : product.product_line.toLowerCase() === action.payload
      );
    },
    filterProductNo: (state, action) => {
      console.log(action);
      console.log(current(state));
      // state = action.type === "product/filterProductNo" ? products : state;
      // state = products;
      return state.filter((product) =>
        action.payload === "all"
          ? product.status === "active"
          : product.product_no.toLowerCase() === action.payload
      );
    },
    filterProductOEM: (state, action) => {
      console.log(action);
      console.log(current(state));
      // state = products;
      return state.filter((product) =>
        action.payload === "all"
          ? product.status === "active"
          : product.oem.toLowerCase() === action.payload
      );
    },
  },
});

// Action creators are generated for each case reducer function
export const {
  addProduct,
  deleteProduct,
  editProduct,
  filterProductLine,
  filterProductNo,
  filterProductOEM,
  filterProductStatus,
} = productSlice.actions;

export default productSlice.reducer;
