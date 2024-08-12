import { configureStore } from "@reduxjs/toolkit";
import productSlice from "../features/product/productSlice";
import clientSlice from "../features/client/clientSlice";
import userSlice from "../features/user-profile/userSlice";
import salespersonSlice from "../features/salesperson/salespersonSlice";
import oemSlice from "../features/category/oemSlice";
import productLineSlice from "../features/category/productLineSlice";

export const store = configureStore({
  reducer: {
    product: productSlice,
    client: clientSlice,
    user: userSlice,
    salesperson: salespersonSlice,
    oem_category: oemSlice,
    productline_category: productLineSlice,
  },
});
