import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  user: null,
  isLoading: true,
};

export const authSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    loginUser: (state, action) => {
      state.user = action.payload;
    },
    logoutUser: (state) => {
      state.user = null;
    },
    setLoading: (state, action) => {
      state.isLoading = action.payload;
    },
  },
});
export const { loginUser, logoutUser, setLoading } = authSlice.actions;
export default authSlice.reducer