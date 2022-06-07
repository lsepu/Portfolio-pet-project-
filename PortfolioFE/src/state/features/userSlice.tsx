// features/userSlice.js

import { createSlice } from '@reduxjs/toolkit';

interface IUser {
    user: string
} 

const initialState : IUser = {
    user: "",
}

export const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    login: (state, action) => {
      state.user = action.payload;
    },
    logout: (state) => {
      state.user = "";
    },
  },
});

export const { login, logout } = userSlice.actions;

export default userSlice.reducer;

export type { IUser };