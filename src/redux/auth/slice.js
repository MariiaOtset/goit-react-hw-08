import { createSlice } from "@reduxjs/toolkit";
import { logIn, logOut, register, refreshUser } from "./operations";

const initialState = {
  user: {
    name: null,
    email: null,
  },
  token: null,
  isLoggedIn: false,
  isRefreshing: false,
  loading: false,
  error: null,
};

const setAuth = (state, { payload }) => {
  state.user = payload.user;
  state.token = payload.token;
  state.isLoggedIn = true;
  state.loading = false;
  state.error = null;
};

const handleRejected = (state, action) => {
  state.loading = false;
  state.error = action.payload;
};

const handlePending = (state) => {
  state.loading = true;
  state.error = false;
};

const authSlice = createSlice({
  name: "auth",
  initialState,
  extraReducers: (builder) => {
    builder
      .addCase(register.pending, handlePending)
      .addCase(register.fulfilled, setAuth)
      .addCase(register.rejected, handleRejected)

      .addCase(logIn.pending, handlePending)
      .addCase(logIn.fulfilled, setAuth)
      .addCase(logIn.rejected, handleRejected)

      .addCase(logOut.pending, handlePending)
      .addCase(logOut.fulfilled, (state) => {
        state.user = { name: null, email: null };
        state.token = null;
        state.isLoggedIn = false;
        state.loading = false;
        state.error = null;
      })
      .addCase(logOut.rejected, handleRejected)

      .addCase(refreshUser.pending, (state) => {
        state.isRefreshing = true;
        state.loading = true;
        state.error = null;
      })

      .addCase(refreshUser.fulfilled, (state, action) => {
        state.user = action.payload;
        state.isLoggedIn = true;
        state.loading = false;
        state.isRefreshing = false;
        state.error = null;
      })

      .addCase(refreshUser.rejected, (state) => {
        state.isRefreshing = false;
        state.error = "Failed to refresh user data";
      });
  },
});

export const authReducer = authSlice.reducer;
