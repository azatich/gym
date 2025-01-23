import { createSlice } from "@reduxjs/toolkit";

const userSlice = createSlice({
  name: "user",
  initialState: {
    username: localStorage.getItem("username") || null, 
  },
  reducers: {
    setUser: (state, action) => {
      state.username = action.payload;
      localStorage.setItem("username", action.payload);
    },
    clearUser: (state) => {
      state.username = null;
      localStorage.removeItem("username");
    },
  },
});

export const { setUser, clearUser } = userSlice.actions;
export default userSlice.reducer;
