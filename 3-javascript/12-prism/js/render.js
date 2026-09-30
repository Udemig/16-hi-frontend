// =====================================================
// js/render.js — DOM manipülasyonu sadece burada yapılır.
// State'ten gelen veriyi alır, HTML'e dönüştürür.
// Bu dosya state'i HİÇBİR ZAMAN değiştirmez.
// =====================================================

import { getCards } from "./state.js";

// ------ Tek Kart HTML'i ------
// Bir kart nesnesinden <li> elementi oluşturur.
function createCardElement(card) {
  // li elementi oluştur
  const li = document.createElement("li");

  // HTML5 Drag & Drop için zorunlu özellik
  li.draggable = true;

  // data-id: hangi kartla işlem yapıcağımızı bilmek için
  li.dataset.id = card.id;

  // elementi html içeriğini belirle
  li.innerHTML = `
            <span class="drag-handle" title="Sürükle">⠿</span>
            <span class="card-text">${card.text}</span>
            <button class="delete-btn" title="Kartı sil" data-id="${card.id}">✕</button>
  `;

  // elementi döndür
  return li;
}

// ------ Ana Render Fonksiyonu ------
// Çağrıldığı zaman tüm sütunları sıfırdan çizer
function render() {
  // state dosyasında tuttuğumuz günceler kartları al
  const cards = getCards();

  // status değerine göre ilgili listenin içerisinde kardı oluştur
  ["backlog", "in-progress", "done"].forEach((status) => {
    // Bu sütuna ait kartları filtrele
    const columnCards = cards.filter((card) => card.status === status);

    // gerekli elementleri seç
    const list = document.getElementById(`list-${status}`);
    const count = document.getElementById(`count-${status}`);
    const empty = document.getElementById(`empty-${status}`);

    // listeyi temizle ve kartları ekle
    list.innerHTML = "";
    columnCards.forEach((card) => {
      list.appendChild(createCardElement(card));
    });

    // kart sayısını güncelle
    count.textContent = columnCards.length;

    // "kart yok" mesajını göster/gizle
    empty.style.display = columnCards.length === 0 ? "block" : "hidden";
  });
}

export { render };
