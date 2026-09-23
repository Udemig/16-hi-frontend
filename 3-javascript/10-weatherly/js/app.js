/*
 * ===============================================
 * app.js - Ana Uygulama İşlemleri
 * ===============================================
 */

import elements, {
  showValidation,
  clearValidation,
  setActiveState,
  setNotFoundCity,
  setErrorMessage,
  renderCurrentWeather,
  renderForecast,
  renderRecentChips,
} from "./ui.js";

import { fetchCurrentWeather, fetchForecast } from "./api.js";

import { addRecentCity, getRecentCities } from "./storage.js";

// son aratılan şehir
let lastSearchedCity = "";

// şehir arama akışını yöneten ana fonksiyon
async function handleSearch(city) {
  // kullanıcının arattığı şehir adı
  const query = city.trim();

  // şehir adı boşsa ekrana uyarı gönder
  if (!query) return showValidation("Lütfen bir şehir adı girin.");

  clearValidation(); // ekrandaki uyarı mesajını kaldır
  lastSearchedCity = query; // son aratılan şehir adını kaydet
  setActiveState("loading"); // ekrana yükleniyor durumunu getir

  try {
    // API istekleri
    const weatherData = await fetchCurrentWeather(query);
    const forecastData = await fetchForecast(query);

    // Arayüzü güncelle
    renderCurrentWeather(weatherData);
    renderForecast(forecastData);

    // Son yapılan aramayı kaydet ve arayüzü güncelle
    const recentCities = addRecentCity(weatherData.name);
    renderRecentChips(recentCities, (city) => {
      elements.cityInput.value = city;
      handleSearch(city);
    });

    setActiveState("success");
  } catch (error) {
    if (error.message === "NOT_FOUND") {
      setNotFoundCity(query);
      setActiveState("notFound");
    } else {
      setErrorMessage(error.message || "Hava durumu alınamadı");
      setActiveState("error");
    }
  }
}

/*
 * ===============================================
 * Olay Dinleyicileri
 * ===============================================
 */

// formun gönderilme olayı
elements.searchForm.addEventListener("submit", (e) => {
  e.preventDefault();
  handleSearch(elements.cityInput.value);
});

// sayfanın yüklenme olayı
document.addEventListener("DOMContentLoaded", () => {
  // son arananları localStorage'dan al
  const recentCities = getRecentCities();

  // son aranaları ekrana bas
  renderRecentChips(recentCities, (city) => {
    elements.cityInput.value = city;
    handleSearch(city);
  });
});
