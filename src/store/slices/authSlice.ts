import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";
import { useFirebaseLoginMutation } from "../services/fbAuthAPI";
const initialState = {
  user: null,
  isLoading: false,
  error: "",
};

export const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    userLogin: (state) => {
      return state;
    },
  },
});

export const { userLogin } = authSlice.actions;
export default authSlice.reducer;
