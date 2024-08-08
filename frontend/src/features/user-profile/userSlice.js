import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  username: "Salesperson 1",
  email: "salesperson1@gmail.com",
  phone: "+918975648576",
};

export const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    editUser: (state, action) => {
      //   console.log(action);
      state.email = action.payload.email;
      state.username = action.payload.username;
      state.phone = action.payload.phone;
    },
  },
});

// Action creators are generated for each case reducer function
export const { editUser } = userSlice.actions;

export default userSlice.reducer;
