import { createSlice } from "@reduxjs/toolkit";
import { loginUser } from "../asyncThunk/";
import { toast } from "react-toastify";

const initialState = {
  user: null,
  token: null,
  isLoading: false,
};

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {},
  extraReducers: {
    [loginUser.pending]: (state, action) => {
      state.isLoading = true;
    },
    [loginUser.fulfilled]: (state, action) => {
      state.isLoading = false;
      state.user = action.payload.data.foundUser;
      state.token = action.payload.data.encodedToken;
    },
    [loginUser.rejected]: (state, action) => {
      state.isLoading = false;
      toast.error(action.error.message);
    },
  },
});

export const { reducer: authReducer } = authSlice;