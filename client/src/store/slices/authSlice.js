import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import userAPI from '../../services/apis/user';

// POST : api/users/login
export const login = createAsyncThunk(
  'api/login',
  async ({ email, password, remember }, thunkAPI) => {
    const { data } = await userAPI.login({ email, password });
    if (remember) localStorage.setItem('userInfo', JSON.stringify(data.user));
    return data.user;
  }
);

//API
// POST : Register
export const registerApi = createAsyncThunk(
  'api/register',
  async ({ user_name, email, password }, thunkAPI) => {
    console.log(user_name, email, password);
    const { data } = await userAPI.register({ user_name, email, password });
    localStorage.setItem('userInfo', JSON.stringify(data.user));
    return data.user;
  }
);

const userInfoFromStorage = localStorage.getItem('userInfo')
  ? JSON.parse(localStorage.getItem('userInfo'))
  : null;

const initialState = {
  userInfo: userInfoFromStorage,
};
export const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    logout: (state) => {
      console.log('OK LOG');
      localStorage.removeItem('userInfo');
      return {};
    },
    reset_auth: (state) => {
      state.error = null;
    },
  },
  extraReducers: {
    // login list
    [login.pending]: (state) => {
      state.loading = true;
    },
    [login.fulfilled]: (state, action) => {
      state.loading = false;
      state.userInfo = action.payload;
    },
    [login.rejected]: (state, action) => {
      state.loading = false;
      state.error = 'User name or password is  wrong';
    },

    // // register
    [registerApi.pending]: (state) => {
      state.loading = true;
    },
    [registerApi.fulfilled]: (state, action) => {
      state.loading = false;
      state.userInfo = action.payload;
    },
    [registerApi.rejected]: (state, action) => {
      state.loading = false;
      state.errorRegister = 'Email already exists';
    },
  },
});

// Action creators are generated for each case reducer function
export const { logout, reset_auth } = authSlice.actions;

export default authSlice.reducer;
