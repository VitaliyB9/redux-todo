import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

const initialState = { posts: [] };

export const getPosts = createAsyncThunk(
  "posts/getPosts",
  async (_, { rejectWithValue, dispatch }) => {
    const result = await axios.get(
      "https://jsonplaceholder.typicode.com/posts"
    );
    dispatch(setPosts(result.data));
  }
);

export const deletePostById = createAsyncThunk(
  "posts/deletePostById",
  async (id, { rejectWithValue, dispatch }) => {
    await axios.delete(`https://jsonplaceholder.typicode.com/posts/${id}`);
    dispatch(deletePost(id));
  }
);

export const postSlice = createSlice({
  name: "posts",
  initialState,
  reducer: {
    setPosts: (state, action) => {
      state.posts = action.payload;
    },
    deletePost: (state, action) => {
      state.posts = state.posts.filter((post) => (post.id = !action.payload));
    },
  },

  extraReducers: {
    [getPosts.fulfilled]: () => console.log("---getFul"), // прошел успешено запрос
    [getPosts.pending]: () => console.log("---getPending"), // начинаем запрос
    [getPosts.rejected]: () => console.log("---getRejected"), // ошибка

    [deletePostById.fulfilled]: () => console.log("---delFul"),
    [deletePostById.pending]: () => console.log("---delPending"),
    [deletePostById.rejected]: () => console.log("---delRejected"),
  },
});

export const { setPosts, deletePost } = postSlice.actions;
export default postSlice.reducer;
