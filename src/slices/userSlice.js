import {
  createSlice,
  createEntityAdapter,
  createAsyncThunk,
} from "@reduxjs/toolkit";
import axios from "axios";

export const registerUser = createAsyncThunk(
  "user/registerUser",
  async (newUser) => {
    const user = await axios.post("/api/auth/register", newUser);
    return user;
  }
);

const userSlice = createSlice({
  name: "user",
  initialState: { loading: false, error: null, data: {} },
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(registerUser.fulfilled, (state, action) => {
      // Add user to the state array
      state.data = Object.assign({}, state.data, action.payload);
    });
  },
});

export default userSlice.reducer;
