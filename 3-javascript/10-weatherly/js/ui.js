/*
 * ===============================================
 * ui.js - Arayüz ve DOM Render İşlemleri
 * ===============================================
 */

// Tüm DOM elemanlarını tek bir merkezi nesnede topla ve dışa aktar
const elements = {
  // arama
  searchForm: document.querySelector("form"),
  cityInput: document.getElementById("city-input"),
  btnGeo: document.getElementById("btn-geo"),
  btnRetry: document.getElementById("btn-retry"),
  quickBtns: document.querySelectorAll(".quick-chips button"),
  validationMsg: document.getElementById("validation-msg"),
  recentCities: document.getElementById("recent-cities"),

  // durum konteynerları
  stateInitial: document.getElementById("state-initial"),
  stateLoading: document.getElementById("state-loading"),
  stateSuccess: document.getElementById("state-success"),
  stateNotFound: document.getElementById("state-not-found"),
  stateError: document.getElementById("state-error"),

  // güncel hava durumu elemanları
  currentCity: document.getElementById("current-city"),
  currentDate: document.getElementById("current-date"),
  currentIcon: document.getElementById("current-icon"),
  currentTemp: document.getElementById("current-temp-val"),
  currentDesc: document.getElementById("current-desc"),
  metricFeels: document.getElementById("metrics-feels"),
  metricHumidity: document.getElementById("metrics-humidity"),
  metricWind: document.getElementById("metrics-wind"),
  weatherTip: document.getElementById("weather-tip"),

  // Diğer elemanlar
  notFoundCity: document.getElementById("not-found-city"),
  errorMessage: document.getElementById("error-message"),
  forecastContainer: document.getElementById("forecast-container"),
};

// Uyarı metnini güncelle
export function showValidation(message) {
  elements.validationMsg.textContent = message;
}

// Uyarı metnini temizle
export function clearValidation() {
  elements.validationMsg.textContent = "";
}

// Main içerisine hangi section'un ekrana basılacağını berlirleyen fonknsiyon
export function setActiveState(stateName) {
  // durum elementlerini dizi formatına getir
  const stateList = [
    elements.stateInitial,
    elements.stateLoading,
    elements.stateSuccess,
    elements.stateNotFound,
    elements.stateError,
  ];

  // bütün durum elementlerini gizle
  stateList.forEach((el) => el.classList.add("hidden"));

  // parametrenin hangi elemente denk geldiğini tanımlayan nesne
  const activeObj = {
    initial: elements.stateInitial,
    loading: elements.stateLoading,
    success: elements.stateSuccess,
    error: elements.stateError,
    notFound: elements.stateNotFound,
  };

  // ekranda görünmesi gereken elementten hidden class'ını kaldır
  if (activeObj[stateName]) {
    activeObj[stateName].classList.remove("hidden");
  }
}

export default elements;
