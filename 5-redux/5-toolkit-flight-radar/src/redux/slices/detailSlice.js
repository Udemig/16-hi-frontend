import { createSlice } from "@reduxjs/toolkit";
import { getDetails } from "../actions";

const detailSlice = createSlice({
  name: "detail",
  initialState: { loading: true, error: null, info: [], route: [] },
  reducers: {},
  extraReducers: (builder) => {
    // yüklenme durumu
    builder.addCase(getDetails.pending, (state, action) => {
      state.loading = true;
      state.error = null;
      state.info = null;
      state.route = [];
    });
    // hata durumu
    builder.addCase(getDetails.rejected, (state, action) => {
      state.loading = false;
      state.error = action.error.message;
    });
    // veri gelme durumu
    builder.addCase(getDetails.fulfilled, (state, action) => {
      state.loading = false;
      state.error = null;
      state.info = action.payload;
      state.route = action.payload.trail;
    });
  },
});

export default detailSlice.reducer;
