import axios from "axios";

const api = axios.create({
    baseURL: "https://deep-translate1.p.rapidapi.com",
     headers: {
    'x-rapidapi-key': import.meta.env.VITE_API_KEY,
    'x-rapidapi-host': 'deep-translate1.p.rapidapi.com'
  }
})


export default api;