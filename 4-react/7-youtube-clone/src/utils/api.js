import axios from "axios";

// Axios için bütün isteklerde ortak olucak ayarları yap
const api = axios.create({
  baseURL: "https://yt-api.p.rapidapi.com",
  params: { geo: "TR", lang: "tr" },
  headers: {
    // .env de tanımlanan değişkeni çağırma
    "x-rapidapi-key": import.meta.env.VITE_API_KEY,
    "x-rapidapi-host": "yt-api.p.rapidapi.com",
  },
});

export default api;
