import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  name: "",
  loggedIn: false,
};

const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    setUser: (state, action) => {
      state.name = action.payload.name;
      state.loggedIn = true;
    },
    logout: (state) => {
      state.name = "";
      state.loggedIn = false;
    },
  },
});

export const { setUser, logout } = userSlice.actions;
export default userSlice.reducer;
