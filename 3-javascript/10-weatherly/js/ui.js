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

// Aratılan kelime metnini güncelleyen fonksiyon
export function setNotFoundCity(city) {
  elements.notFoundCity.textContent = city;
}

// Hata mesajını güncelleyen fonksiyon
export function setErrorMessage(message) {
  elements.errorMessage.textContent = message;
}

// Güncel hava durumu kartınının bilgilerini güncelle
export function renderCurrentWeather(data) {
  elements.currentCity.innerText = `${data.name}, ${data.sys.country}`;
  elements.currentDate.innerText = new Date(data.dt * 1000).toLocaleDateString("tr-TR", {
    weekday: "long",
    day: "numeric",
    month: "long",
  });
  elements.currentTemp.innerText = Math.round(data.main.temp);
  elements.metricFeels.innerText = Math.round(data.main.feels_like) + "°C";
  elements.metricHumidity.innerText = "%" + data.main.humidity;
  elements.metricWind.innerText = data.wind.speed + "km/h";
  elements.currentDesc.innerText = data.weather[0].description;
  elements.currentIcon.src = `https://openweathermap.org/payload/api/media/file/${data.weather[0].icon}.png`;
  elements.weatherTip.innerText = getWeatherTip(
    data.main.temp,
    data.weather[0].id,
    data.wind.speed,
  );

  // arkaplan temasını güncelle
  document.body.className = getTheme(data.weather[0].id);
}

// Hava durumu koduna göre arkaplan temasına karar veren fonksiyon
export function getTheme(code) {
  if (code >= 200 && code < 300) return "theme-thunder";

  if (code >= 300 && code < 600) return "theme-rain";

  if (code >= 600 && code < 700) return "theme-snow";

  if (code >= 700 && code < 800) return "theme-clouds";

  if (code === 800) return "theme-clear";

  return "theme-clouds";
}

// Tavsiye metnine karar veren fonksiyonn
export function getWeatherTip(temp, code, windSpeed) {
  if (code >= 200 && code < 600)
    return "Bugün yağış bekleniyor, şemsiyeni yanına almayı unutma! ☔";

  if (code >= 600 && code < 700) return "Kar yağıyor! Bere ve eldivenlerini giymelisin. ❄️🧣";

  if (windSpeed > 30) return "Rüzgar sert esiyor, rüzgarlık tercih edebilirsin 🍃";

  if (temp < 10) return "Hava soğuk, kalın bir mont giymeyi unutma. 🧥";

  if (temp > 28) return "Hava sıcak! Güneş gözlüğünü tak ve bol su iç. 🧢🕶️";

  return "Hava harika, açık havada yürüyüş için ideal bir gün 🚶🌿";
}

// 5.Günlük Geçmişi ekrana bas
export function renderForecast(data) {
  // önceden ekrana basılan kartları temizle
  elements.forecastContainer.innerHTML = "";

  // api'dan gelen hava durumu tahmin verisi
  const list = data.list;

  // 40 elemanlı diziden sadece saat 12'deki tahminleri al
  const dailyList = list.filter((item) => item.dt_txt.includes("12:00:00"));

  // dizideki her bir eleman için kart oluştur
  dailyList.forEach((item) => {
    const card = document.createElement("div");
    card.className = "forecast-card";

    const dayName = new Date(item.dt * 1000).toLocaleDateString("tr", { weekday: "short" });
    const icon = `https://openweathermap.org/payload/api/media/file/${item.weather[0].icon}.png`;
    const temp = Math.round(item.main.temp);
    const desc = item.weather[0].description;

    card.innerHTML = `
      <span class="forecast-day">${dayName}</span>
      <img class="forecast-icon" src="${icon}" />
      <span class="forecast-temps">${temp}°C</span>
      <span class="forecast-desc">${desc}</span>
    `;

    elements.forecastContainer.appendChild(card);
  });
}
// Son aratılan şehirleri ekrana bas
export function renderRecentChips(cities, onChipClick) {
  // önceden ekrana basılan butonları temizle
  elements.recentCities.innerHTML = "";

  // her bir son aratılan şehir için bu adımı tekrarla:
  cities.forEach((city) => {
    // buton elementi oluştur
    const chip = document.createElement("button");

    // elementin class'ını güncelle
    chip.className = "chip";

    // elementin içindeki yazıyı güncelle
    chip.textContent = city;

    // butona tıklanınca çalışacak fonksiyonu ayarla
    chip.addEventListener("click", () => onChipClick(city));

    // elementi ekrana bas
    elements.recentCities.appendChild(chip);
  });
}

export default elements;
