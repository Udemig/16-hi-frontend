/*
 * ===============================================
 * app.js - Ana Uygulama İşlemleri
 * ===============================================
 */

import elements, { showValidation, clearValidation, setActiveState } from "./ui.js";

// son aratılan şehir
let lastSearchedCity = "";

// şehir arama akışını yöneten ana fonksiyon
function handleSearch(city) {
  // kullanıcının arattığı şehir adı
  const query = city.trim();

  // şehir adı boşsa ekrana uyarı gönder
  if (!query) return showValidation("Lütfen bir şehir adı girin.");

  clearValidation(); // ekrandaki uyarı mesajını kaldır
  lastSearchedCity = query; // son aratılan şehir adını kaydet
  setActiveState("loading"); // ekrana yükleniyor durumunu getir

  // API İstekleri
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
