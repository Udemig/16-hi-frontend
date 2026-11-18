import { createSlice } from "@reduxjs/toolkit";
import { getLanguages } from "./../actions/index";

const languageSlice = createSlice({
  name: "language",
  initialState: { loading: true, error: null, languages: [] },
  // senkron aksiyonlar
  reducers: {},
  // asenkron aksiyon
  extraReducers: (builder) => {
    // yüklenme durumunda
    builder.addCase(getLanguages.pending, (state, action) => {
      state.loading = true;
    });
    // hata durumunda
    builder.addCase(getLanguages.rejected, (state, action) => {
      state.loading = false;
      state.error = action.error.message;
    });
    // veri gelme durumunda
    builder.addCase(getLanguages.fulfilled, (state, action) => {
      state.loading = false;
      state.error = null;
      state.languages = action.payload;
    });
  },
});

export const {} = languageSlice.actions;

export default languageSlice.reducer;
