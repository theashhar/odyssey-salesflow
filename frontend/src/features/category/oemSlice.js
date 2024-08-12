import { createSlice } from "@reduxjs/toolkit";
import oem from "../../data/oemData.json";

export const oemSlice = createSlice({
  name: "oem",
  initialState: oem,
  reducers: {
    addOEM: (state, action) => {
      console.log(action.payload);
      let newOEM = action.payload;
      if (state.indexOf(newOEM.toLowerCase()) === -1) {
        state.push(newOEM);
      }
    },
    deleteOEM: (state, action) => {
      console.log(action);
      return state.filter((client) => client.id !== action.payload);
    },
  },
});

// Action creators are generated for each case reducer function
export const { addOEM, deleteOEM } = oemSlice.actions;

export default oemSlice.reducer;
