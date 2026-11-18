import { createAsyncThunk } from "@reduxjs/toolkit";
import api from "./../../utils/api";

// dil verileri için api isteği atıp yanıta göre reducer'a oto. haber veren thunk aksiyonu
export const getLanguages = createAsyncThunk("language/getLanguages", async () => {
  // api'a istek at
  const res = await api.get("/language/translate/v2/languages");

  // aksiyonun payload'ını return et
  return res.data.languages;
});

// api'a çeviri için istek atıp reducer'a haber ver
export const translateText = createAsyncThunk(
  "translate/translateText",
  async (params, { getState }) => {
    // api'a istek at
    // getState: aksiyon içerisinde store'daki veriye abone olmaya yarar
    const state = getState().translateReducer;

    const res = await api.post("/language/translate/v2", {
      q: state.textToTranslate,
      source: state.sourceLang.value,
      target: state.targetLang.value,
    });

    // aksiyonun payloadını return et
    return res.data.data.translations.translatedText[0];
  },
);
