import { createSlice } from "@reduxjs/toolkit";
import clients from "../../data/client.json";

export const clientSlice = createSlice({
  name: "client",
  initialState: clients,
  reducers: {
    addClient: (state, action) => {
      //   console.log(action);
      state.push(action.payload);
    },
    deleteClient: (state) => {
      state.value -= 1;
    },
    editClient: (state, action) => {
      state.value += action.payload;
    },
  },
});

// Action creators are generated for each case reducer function
export const { addClient, deleteClient, editClient } = clientSlice.actions;

export default clientSlice.reducer;
