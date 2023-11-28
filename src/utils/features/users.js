import { createSlice } from "@reduxjs/toolkit";

export const userSlice = createSlice({
  name: "user",
  initialState:{
    user: null
  },
  reducers: {
    login: (state, action) => {
      state.user = action.payload;
    },
    logout: (state) => {
      state.user = null;
    }, 
    editFirstname: (state, action) => {
      state.user.firstname = action.payload;
    },
    editLastname: (state, action) => {
      state.user.lastname = action.payload;
    }
  }
})

export const {login, logout, editFirstname, editLastname} = userSlice.actions;

export const selectUser = (state) => state.user.user;

export default userSlice.reducer;