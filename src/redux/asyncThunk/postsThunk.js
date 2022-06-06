import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

const getPosts = createAsyncThunk("posts/allPosts", async (rejectWithValue) => {
  try {
    const response = await axios.get("/api/posts");
    const data = { data: response.data, status: response.status };
    return data;
  } catch (error) {
    return rejectWithValue({
      data: error.response.data,
      status: error.response.status,
    });
  }
});

const addPost = createAsyncThunk(
  "posts/addPost",
  async ({ postData, token }, { rejectWithValue }) => {
    try {
      const response = await axios.post(
        `/api/posts`,
        { postData },
        { headers: { authorization: token } }
      );
      const data = { data: response.data, status: response.status };
      return data;
    } catch (error) {
      return rejectWithValue({
        data: error.response.data,
        status: error.response.status,
      });
    }
  }
);

const deletePost = createAsyncThunk(
  "posts/deletePost",
  async ({ post, token }, { rejectWithValue }) => {
    try {
      const response = await axios.delete(`/api/posts/${post._id}`, {
        headers: { authorization: token },
      });
      const data = { data: response.data, status: response.status };
      return data;
    } catch (error) {
      return rejectWithValue({
        data: error.response.data,
        status: error.response.status,
      });
    }
  }
);

const editPost = createAsyncThunk(
  "posts/editPost",
  async ({ updatedData: postData, token }, { rejectWithValue }) => {
    try {
      const response = await axios.post(
        `/api/posts/edit/${postData._id}`,
        { postData },
        {
          headers: { authorization: token },
        }
      );
      const data = { data: response.data, status: response.status };
      return data;
    } catch (error) {
      return rejectWithValue({
        data: error.response.data,
        status: error.response.status,
      });
    }
  }
);

export { getPosts, addPost, deletePost, editPost };
