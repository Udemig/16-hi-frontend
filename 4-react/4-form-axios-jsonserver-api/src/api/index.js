import axios from "axios";

// axios'un varsayılan ayarlarını yaptığımız bir örneğini oluştur
const api = axios.create({
  baseURL: "http://localhost:4000", // istek atılacak temel api adresi
  timeout: 3000, // 3 saniye yanıt gelmezse zaman aşımı hatası ver
  headers: {}, // varsayılan headers
  params: {}, // varsayılan paramets
});

export default api;
