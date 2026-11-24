import { createAsyncThunk } from "@reduxjs/toolkit";
import api from "./../../utils/api";
import { API_PARAMS } from "./../../utils/constants";

// Thunk Aksiyonu
export const getFligts = createAsyncThunk("flight/getFlights", async () => {
  // api'a istek at
  const res = await api.get("/flights/list-in-boundary", { params: API_PARAMS });

  // api'dan gelen dizi içerisinde dizilerden oluşan veriyi nesnelerden oluşan diziye çevir
  const formatted = res.data.aircraft.map((item) => ({
    id: item[0],
    callsign: item[1],
    lat: item[2],
    lon: item[3],
    track: item[4],
    alt: item[5],
    speed: item[6],
  }));

  // aksiyonun payload'ını return et
  return formatted;
});

// Thunk Akisyonu
export const getDetails = createAsyncThunk("detail/getDetails", async (id) => {
  // api isteği at
  const res = await api.get("/flights/detail", { params: { flight: id } });

  // paylod return
  return res.data;
});
