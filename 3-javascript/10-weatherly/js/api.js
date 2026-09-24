/*
 * ===============================================
 * api.js - API İsteği ile Alakalı İşlemler
 * ===============================================
 */

const API_KEY = "913291efc11bfb5ce8a4ef1dd0615535";
const API_BASE_URL = "https://api.openweathermap.org/data/2.5";

// Şehir adına göre hava durumu bilgilerinni API'dan alan fonksiyon
export const fetchCurrentWeather = async (city) => {
  // istek atılacak url'i hazırla (parametreleri ekledik)
  const url = `${API_BASE_URL}/weather?appid=${API_KEY}&q=${city}&units=metric&lang=tr`;

  // api'a istek at
  const response = await fetch(url);

  // eğer 404 dönerse hata fırlat
  if (response.status === 404) {
    throw new Error("NOT_FOUND");
  }

  // sunucu kaynaklı bir hata varsa
  if (!response.ok) {
    throw new Error("Hava durumu servisine ulaşılamadı");
  }

  // api yannıtını js formatına çevirip return et
  return await response.json();
};

// Şehir adına göre 5 günlük tahmin verisini getirir
export const fetchForecast = async (city) => {
  // istek atılacak url'İ hazırla
  const url = `${API_BASE_URL}/forecast?appid=${API_KEY}&q=${city}&units=metric&lang=tr`;

  // api isteğini at
  const response = await fetch(url);

  // api yanıtını js formatınan çevirip return et
  return await response.json();
};

// Kordinatlara göre hava durumu verisini alan fonknsiyon
export const fetchWeatherByCoords = async (lat, lon) => {
  // istek atılacak api adresini ayarla
  const url = `${API_BASE_URL}/weather?appid=${API_KEY}&lat=${lat}&lon=${lon}&units=metric&lang=tr`;

  // api isteği at
  const response = await fetch(url);

  // api'dan olumsuz yanıt gelirse hata fırlat
  if (!response.ok) {
    throw new Error("Konum hava durumu verisi alınamadı");
  }

  // apidan gelen yanıtı js formatına çevirip return et
  return await response.json();
};
