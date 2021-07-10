import {
  createSlice,
  createEntityAdapter,
  createAsyncThunk,
} from "@reduxjs/toolkit";
import axios from "axios";

export const getVolunteers = createAsyncThunk(
  "user/getVolunteers",
  async (req) => {
    const volunteersRes = await axios.get("/api/volunteers", req);
    return volunteersRes.data;
  }
);

const usersSlice = createSlice({
  name: "users",
  initialState: { loading: false, error: null, data: [] },
  reducers: {},
  extraReducers: (builder) => {
    // get volunteers
    builder.addCase(getVolunteers.pending, (state) => {
      state.loading = true;
    });
    builder.addCase(getVolunteers.fulfilled, (state, action) => {
      state.data = [...action.payload];
    });
    builder.addCase(getVolunteers.rejected, (state) => {
      state.loading = false;
      state.error = true;
    });
  },
});

export default usersSlice.reducer;