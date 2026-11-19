import { createSlice } from "@reduxjs/toolkit";

const detailSlice = createSlice({
  name: "detail",
  initialState: { loading: true, error: null, info: [], route: [] },
  reducers: {},
  extraReducers: (builder) => {},
});

export default detailSlice.reducer;
