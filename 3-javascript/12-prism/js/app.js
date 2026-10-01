// =====================================================
// js/app.js — Giriş noktası. Sayfayı başlatır.
// =====================================================

import { addCard, removeCard } from "./state.js";
import { render } from "./render.js";
import { initDragDrop } from "./dragdrop.js";

// ------ Kart Ekleme ------
function handleAddCard(event) {
  // sayfa yenilenmesini engelle
  event.preventDefault();

  // inputtaki yazıya eriş
  const input = document.getElementById("global-input");
  const text = input.value.trim();

  // yazı girilmediyse fonksiyonu durdur inputa odakla
  if (!text) return input.focus();

  // yeni kartı oluştur
  addCard(text);

  // arayüze bütün kartları bas
  render();

  // inputu sıfırla ve odaklan
  input.value = "";
  input.focus();
}

// ------ Kart Silme ------
// Event Delegation: Bütün elementlere ayrı ayrı olay dinleyicisi eklemek yerine kapsayıcı elemente sadece bir dinlyeci ekleme yaklaşımıdır (Performans Açısından Avantajlı)
function handleBoardClick(event) {
  // buton dışında bir elemente tıklanırsa fonksiyonu durdur
  const btn = event.target.closest(".delete-btn");
  if (!btn) return;

  // state dizisinden cardı kaldır
  removeCard(btn.dataset.id);

  // arayüzü güncelle
  render();
}

// ------ Olay Dinleyicileri ------
document.querySelector("form").addEventListener("submit", handleAddCard);
document.querySelector("#board").addEventListener("click", handleBoardClick);

// Kayıtlı kartları ekrana bas ve sürükle & bırak etkinleştir
initDragDrop();
render();
