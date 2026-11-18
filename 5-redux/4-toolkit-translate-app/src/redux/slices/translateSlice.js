import { createSlice } from "@reduxjs/toolkit";
import { translateText } from "../actions";

const translateSlice = createSlice({
  name: "translate",
  initialState: {
    loading: true,
    error: null,
    sourceLang: { label: "Dili Algıla", value: undefined },
    targetLang: { label: "English", value: "en" },
    textToTranslate: "",
    translatedText: "",
    history: [],
  },
  //  senkron aksiyonlar
  reducers: {
    setSourceLang: (state, action) => {
      state.sourceLang = action.payload;
    },
    setTargetLang: (state, action) => {
      state.targetLang = action.payload;
    },
    setText: (state, action) => {
      state.textToTranslate = action.payload;
    },
    swap: (state) => {
      const tempSource = state.sourceLang;
      const tempTarget = state.targetLang;
      const tempText = state.textToTranslate;
      const tempTranslated = state.translatedText;

      state.sourceLang = tempTarget;
      state.targetLang = tempSource;
      state.textToTranslate = tempTranslated;
      state.translatedText = tempText;
    },
    clear: (state) => {
      state.textToTranslate = "";
      state.translatedText = "";
    },
  },
  // asenkron aksiyonlar
  extraReducers: (builder) => {
    // yüklenme durumundayken
    builder.addCase(translateText.pending, (state) => {
      state.loading = true;
    });
    // hata durumundayken
    builder.addCase(translateText.rejected, (state, action) => {
      state.loading = false;
      state.error = action.error.message;
    });
    // veri geldiğinde
    builder.addCase(translateText.fulfilled, (state, action) => {
      state.loading = false;
      state.error = null;
      state.translatedText = action.payload;
    });
  },
});

export const { setSourceLang, setTargetLang, setText, swap, clear } = translateSlice.actions;

export default translateSlice.reducer;
