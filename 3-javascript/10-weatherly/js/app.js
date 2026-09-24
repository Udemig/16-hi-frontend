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

import { fetchCurrentWeather, fetchForecast, fetchWeatherByCoords } from "./api.js";

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
    // tıklanılan şehrin adını inputa yaz
    elements.cityInput.value = city;

    // tıklanılann şehrin bilgilerini al ve ekrana bas
    handleSearch(city);
  });
});

// geo butonuna tıklanma olayı
elements.btnGeo.addEventListener("click", () => {
  // tarayıcı bu hizmeti desteklemiyorsa kullanıcıyı uyar
  if (!navigator.geolocation) return showValidation("Tarayıcınız konum servisini desteklemiyor!");

  // ekrana mesaj yaz
  showValidation("Konumunuz tespit ediliyor...");

  // kullanıcnın anlık konumunu iste
  navigator.geolocation.getCurrentPosition(
    // konum alınırsa çalışır
    async (position) => {
      // mesajı ekrandan kaldır
      clearValidation();

      // kullanıcının enlem ve boylamını değişkene ata
      const { latitude, longitude } = position.coords;

      // api'dan bu konumdaki hava durumunu iste
      try {
        const weatherData = await fetchWeatherByCoords(latitude, longitude);
        if (weatherData.name) {
          elements.cityInput.value = weatherData.name;
          handleSearch(weatherData.name);
        }
      } catch (error) {
        showValidation("Konum için hava durumu verisi alınamadı");
      }
    },
    // konum alınamazsa çalışır
    () => {
      showValidation("Konum erişim izni verilmedi");
    },
  );
});

// hızlı ara butonlarının herbirinin tıklanma olayı
elements.quickBtns.forEach((btn) => {
  btn.addEventListener("click", () => {
    // şehrin adını al
    const city = btn.textContent;

    // inputu güncelle
    elements.cityInput.value = city;

    // şehrin hava durumunu al
    handleSearch(city);
  });
});
