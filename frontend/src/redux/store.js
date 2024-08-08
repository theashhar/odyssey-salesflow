import { configureStore } from "@reduxjs/toolkit";
import productSlice from "../features/product/productSlice";
import clientSlice from "../features/client/clientSlice";
import userSlice from "../features/user-profile/userSlice";

export const store = configureStore({
  reducer: {
    product: productSlice,
    client: clientSlice,
    user: userSlice,
  },
});
