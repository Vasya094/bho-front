import {
  createSlice,
  createEntityAdapter,
  createAsyncThunk,
} from "@reduxjs/toolkit";
import axios from "axios";

export const registerUser = createAsyncThunk(
  "user/registerUser",
  async (newUser) => {
    const userRes = await axios.post("/api/auth/register", newUser);
    return userRes.data;
  }
);
export const loginUser = createAsyncThunk(
  "user/loginUser",
  async (newUser) => {
    const userRes = await axios.post("/api/auth/login", newUser);
    return userRes.data;
  }
);

const userSlice = createSlice({
  name: "user",
  initialState: { loading: false, error: null, data: {} },
  reducers: {},
  extraReducers: (builder) => {
    // registerUser
    builder.addCase(registerUser.pending, (state) => {
      state.loading = true;
    });
    builder.addCase(registerUser.fulfilled, (state, action) => {
      state.data = Object.assign({}, state.data, action.payload);
    });
    builder.addCase(registerUser.rejected, (state) => {
      state.loading = false;
      state.error = true;
    });
    // loginUser
    builder.addCase(loginUser.pending, (state) => {
      state.loading = true;
    });
    builder.addCase(loginUser.fulfilled, (state, action) => {
      state.data = Object.assign({}, state.data, action.payload);
      localStorage.setItem('UserNow', JSON.stringify(state.data));
    });
    builder.addCase(loginUser.rejected, (state) => {
      state.loading = false;
      state.error = true;
    });
  },
});

export default userSlice.reducer;
