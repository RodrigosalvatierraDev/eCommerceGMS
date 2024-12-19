import { createSlice } from '@reduxjs/toolkit';

const initialState = JSON.parse(localStorage.getItem('user')) || {
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
      localStorage.setItem("user", JSON.stringify(state));
    },
    logout: (state) => {
      state.name = "";
      state.loggedIn = false;
      localStorage.removeItem("user");
    },
  },
});

export const { setUser, logout } = userSlice.actions;
export default userSlice.reducer;
