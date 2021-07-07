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
    console.log(userRes, "userRes")
    return userRes.data;
  }
);
// export const registerUser = createAsyncThunk(
//   "user/registerUser",
//   async (newUser) => {
//     const user = await axios.post("/api/auth/register", newUser);
//     return user;
//   }
// );

const userSlice = createSlice({
  name: "user",
  initialState: { loading: false, error: null, data: {} },
  reducers: {},
  extraReducers: (builder) => {
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
  },
});

export default userSlice.reducer;
