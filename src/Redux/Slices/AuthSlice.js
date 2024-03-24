import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  token: null,
  userName: null,
  email: null,
  expireDate: null,
  refreshToken: null,
  refreshTokenExpiration: null,
  userJob: null,
  appUserId: null,
};

export const AuthSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    loginAction: (state, action) => {
      state.token = action.payload.token
      state.username = action.payload.username
      state.email = action.payload.email
      state.expireDate = action.payload.expireDate
      state.refreshToken = action.payload.refreshToken
      state.refreshTokenExpiration = action.payload.refreshTokenExpiration
      state.appUserId = action.payload.appUserId
    },
    setUsetJobAction: (state, action) => {
      state.userJob = action.payload.Role
    },
    logoutAction: (state, action) => {
      return initialState;
    },
    registerAction: (state, action) => {
      return action.payload;
    },
  },
});

// Export actions and reducer
export const { loginAction, logoutAction, registerAction, setUsetJobAction } = AuthSlice.actions;
export default AuthSlice.reducer;
