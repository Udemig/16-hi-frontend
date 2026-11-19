import { createSlice } from "@reduxjs/toolkit";
import { getFligts } from "../actions";

const flightSlice = createSlice({
  name: "flight",
  initialState: { loading: true, error: null, flights: [], searchTerm: "" },
  reducers: {
    setText: (state, action) => {
      state.searchTerm = action.payload;
    },
  },
  extraReducers: (builder) => {
    // yüklenme başladıysa
    builder.addCase(getFligts.pending, (state) => {
      state.loading = true;
    });
    // hata geldiyse
    builder.addCase(getFligts.rejected, (state, action) => {
      state.loading = false;
      state.error = action.error.message;
    });
    // veri geldiyse
    builder.addCase(getFligts.fulfilled, (state, action) => {
      state.loading = false;
      state.error = null;
      state.flights = action.payload;
    });
  },
});

export const { setText } = flightSlice.actions;

export default flightSlice.reducer;
