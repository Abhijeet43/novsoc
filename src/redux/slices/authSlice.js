import { createSlice } from "@reduxjs/toolkit";
import {
  loginUser,
  signupUser,
  editUser,
  bookmarkPost,
  removeFromBookmark,
  getAllBookmarks,
} from "../asyncThunk/";
import { toast } from "react-toastify";

const initialState = {
  user: JSON.parse(localStorage.getItem("user")) || null,
  token: localStorage.getItem("token") || null,
  isLoading: false,
  bookmarks: [],
  bookmarkStatus: "idle",
};

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    logoutUser: (state) => {
      state.user = null;
      state.token = null;
      localStorage.removeItem("user");
      localStorage.removeItem("token");
    },
    updateUser: (state, action) => {
      state.user = action.payload;
    },
    setLoading: (state) => {
      state.isLoading = true;
    },
  },
  extraReducers: {
    [loginUser.pending]: (state) => {
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
    [signupUser.pending]: (state) => {
      state.isLoading = true;
    },
    [signupUser.fulfilled]: (state, action) => {
      state.isLoading = false;
      state.user = action.payload.data.createdUser;
      state.token = action.payload.data.encodedToken;
    },
    [signupUser.rejected]: (state, action) => {
      state.isLoading = false;
    },
    [editUser.pending]: (state) => {
      state.isLoading = true;
    },
    [editUser.fulfilled]: (state, action) => {
      state.isLoading = false;
      state.user = action.payload.data.user;
    },
    [editUser.rejected]: (state, action) => {
      state.isLoading = false;
      console.error(action.error.message);
    },
    [bookmarkPost.pending]: (state) => {
      state.isLoading = true;
    },
    [bookmarkPost.fulfilled]: (state, action) => {
      state.isLoading = false;
      state.bookmarks = action.payload.data.bookmarks;
    },
    [bookmarkPost.rejected]: (state, action) => {
      state.isLoading = false;
      toast.error(action.payload.data.errors[0]);
    },
    [removeFromBookmark.pending]: (state) => {
      state.isLoading = true;
    },
    [removeFromBookmark.fulfilled]: (state, action) => {
      state.isLoading = false;
      state.bookmarks = action.payload.data.bookmarks;
    },
    [removeFromBookmark.rejected]: (state, action) => {
      state.isLoading = false;
      toast.error(action.payload.data.errors[0]);
    },
    [getAllBookmarks.pending]: (state) => {
      state.bookmarkStatus = "pending";
    },
    [getAllBookmarks.fulfilled]: (state, action) => {
      state.bookmarkStatus = "resolved";
      state.bookmarks = action.payload.data.bookmarks;
    },
    [getAllBookmarks.rejected]: (state, action) => {
      state.bookmarkStatus = "rejected";
      toast.error(action);
    },
  },
});

export const { logoutUser, updateUser, setLoading } = authSlice.actions;
export const { reducer: authReducer } = authSlice;
