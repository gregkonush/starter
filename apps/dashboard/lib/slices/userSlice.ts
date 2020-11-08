import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';

export const loginUser = createAsyncThunk('user/loginUser', async () => {
  console.log('user logged in');
});

const userSlice = createSlice({
  name: 'username',
  initialState: {
    username: '',
  },
  reducers: {
    onUsernameChange: (state, action) => {
      state.username = action.payload.username;
    },
  },
});

export const selectUser = (state) => state.user;

export const { onUsernameChange } = userSlice.actions;

export default userSlice.reducer;
