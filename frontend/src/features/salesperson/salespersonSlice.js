import { createSlice } from "@reduxjs/toolkit";
import salespeopleData from "../../data/salesperson.json";

export const salespersonSlice = createSlice({
  name: "salesperson",
  initialState: salespeopleData,
  reducers: {
    addSalesperson: (state, action) => {
      console.log(action);
      state.push(action.payload);
    },
    deleteSalesperson: (state, action) => {
      console.log(action);
      return state.filter((client) => client.id !== action.payload);
    },
    editSalesperson: (state, action) => {
      console.log(action);
    },
  },
});

// Action creators are generated for each case reducer function
export const { addSalesperson, deleteSalesperson, editSalesperson } =
  salespersonSlice.actions;

export default salespersonSlice.reducer;
