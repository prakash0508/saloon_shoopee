import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  user: {},
  isLoggedin: false,
  token : ""
};

export const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    login: (state, action) => {
      if (action.payload) {
        state.isLoggedin = true;
        state.user = action.payload.user;
        state.token = action.payload.token
      } else {
        state.isLoggedin = false;
        state.user = {};
        state.token = ""
      }
    },
    logout: (state) => {
      state.isLoggedin = false;
      state.user = {};
      state.token = ""
    },
  },
});

export const { login, logout } = userSlice.actions;

export default userSlice.reducer;
