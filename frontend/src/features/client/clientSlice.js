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
    deleteClient: (state, action) => {
      console.log(action);
      return state.filter((client) => client.id !== action.payload);
    },
    editClient: (state, action) => {
      console.log(action);
    },
  },
});

// Action creators are generated for each case reducer function
export const { addClient, deleteClient, editClient } = clientSlice.actions;

export default clientSlice.reducer;
