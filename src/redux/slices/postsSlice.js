import { createSlice } from "@reduxjs/toolkit";
import { toast } from "react-toastify";
import {
  getPosts,
  addPost,
  deletePost,
  editPost,
  likePost,
  dislikePost,
  addComment,
  editComment,
  deleteComment,
} from "../asyncThunk/";

const initialState = { posts: [], isLoading: false, status: "idle" };

const postsSlice = createSlice({
  name: "posts",
  initialState,
  reducers: {},
  extraReducers: {
    [getPosts.pending]: (state) => {
      state.status = "pending";
    },
    [getPosts.fulfilled]: (state, action) => {
      state.status = "resolved";
      state.posts = action.payload.data.posts;
    },
    [getPosts.rejected]: (state, action) => {
      state.status = "failed";
      toast.error(action.payload.data.errors[0]);
    },
    [addPost.pending]: (state) => {
      state.isLoading = true;
    },
    [addPost.fulfilled]: (state, action) => {
      state.isLoading = false;
      state.posts = action.payload.data.posts;
    },
    [addPost.rejected]: (state, action) => {
      state.isLoading = false;
      toast.error(action.payload.data.errors[0]);
    },
    [deletePost.pending]: (state) => {
      state.isLoading = true;
    },
    [deletePost.fulfilled]: (state, action) => {
      state.isLoading = false;
      state.posts = action.payload.data.posts;
    },
    [deletePost.rejected]: (state, action) => {
      state.isLoading = false;
      toast.error(action.payload.data.errors[0]);
    },
    [editPost.pending]: (state) => {
      state.isLoading = true;
    },
    [editPost.fulfilled]: (state, action) => {
      state.isLoading = false;
      state.posts = action.payload.data.posts;
    },
    [editPost.rejected]: (state, action) => {
      state.isLoading = false;
      toast.error(action.payload.data.errors[0]);
    },
    [likePost.pending]: (state) => {
      state.isLoading = true;
    },
    [likePost.fulfilled]: (state, action) => {
      state.isLoading = false;
      state.posts = action.payload.data.posts;
    },
    [likePost.rejected]: (state, action) => {
      state.isLoading = false;
      toast.error(action.payload.data.errors[0]);
    },
    [dislikePost.pending]: (state) => {
      state.isLoading = true;
    },
    [dislikePost.fulfilled]: (state, action) => {
      state.isLoading = false;
      state.posts = action.payload.data.posts;
    },
    [dislikePost.rejected]: (state, action) => {
      state.isLoading = false;
      toast.error(action.payload.data.errors[0]);
    },
    [addComment.pending]: (state) => {
      state.isLoading = true;
    },
    [addComment.fulfilled]: (state, action) => {
      state.isLoading = false;
      state.posts = action.payload.data.posts;
    },
    [addComment.rejected]: (state, action) => {
      state.isLoading = false;
      toast.error(action.payload.data.errors[0]);
    },
    [editComment.pending]: (state) => {
      state.isLoading = true;
    },
    [editComment.fulfilled]: (state, action) => {
      state.isLoading = false;
      state.posts = action.payload.data.posts;
    },
    [editComment.rejected]: (state, action) => {
      state.isLoading = false;
      toast.error(action.payload.data.errors[0]);
    },
    [deleteComment.fulfilled]: (state, action) => {
      state.isLoading = false;
      state.posts = action.payload.data.posts;
    },
    [deleteComment.rejected]: (state, action) => {
      state.isLoading = false;
      toast.error(action.payload.data.errors[0]);
    },
  },
});

export const { reducer: postsReducer } = postsSlice;
