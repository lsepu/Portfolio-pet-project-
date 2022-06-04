import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

//external action
export const getPosts = createAsyncThunk<IPost[]>(
  "posts/getPosts",
  async () => {
    const response = await fetch("https://jsonplaceholder.typicode.com/posts");
    const formattedResponse = await response.json();
    return formattedResponse;
  }
);

interface IPostState {
  posts: IPost[];
  isLoading: boolean;
}

interface IPost {
  userId: number;
  id: number;
  title: string;
  body: string;
}

const initialState: IPostState = {
  posts: [],
  isLoading: false,
};

const postSlice = createSlice({
  name: "post",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(getPosts.pending, (state, action) => {
      state.isLoading = true;
    }),
      builder.addCase(getPosts.fulfilled, (state, action) => {
        state.posts = action.payload;
        state.isLoading = false;
      }),
      builder.addCase(getPosts.rejected, (state, action) => {
        state.isLoading = false;
      });
  },
});

export default postSlice.reducer;

export type { IPostState };
