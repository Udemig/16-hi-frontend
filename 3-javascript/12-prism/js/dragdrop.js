import { moveCard } from "./state.js";
import { render } from "./render.js";

// Hangi kartın sürüklendiğini hatırmak için modül düzeyi değişkeni
let draggedCardId = null;

// ------ sürükleme başladı ---------
function onDragStart(event) {
  // tıklanan element kart mı
  const card = event.target.closest("li");
  if (!card) return;

  // Hangi kartı sürüklediğimizi kaydet
  draggedCardId = card.dataset.id;

  // sürüklenme sınıfı ver
  card.classList.add("dragging");
}

// ------ sürüklemeyi bırak ---------
function onDragEnd(event) {
  const card = event.target.closest("li");

  if (card) {
    card.classList.remove("dragging");
  }

  // sütun vurgusunu temizle
  document.querySelectorAll("section").forEach((section) => section.classList.remove("drag-over"));
}

// ------ sütunun üzerine girildi ---------
function onDragOver(event) {
  // varsayılan davranışı engelle
  event.preventDefault();

  // section elementini seç
  const section = event.target.closest("section");
  if (!section) return;

  // diğer sectionlardaki vurguyu kaldır
  document.querySelectorAll("section").forEach((section) => section.classList.remove("drag-over"));

  // üzerinde olduğumuz sütuna vurgu ver
  section.classList.add("drag-over");
}

// ------ sütunun üzerinden çıkıldı ---------
function onDragLeave(event) {
  const section = event.target.closest("section");

  if (section) {
    section.classList.remove("drag-over");
  }
}

// ------ sütunun üzerine bırakıldı ---------
function onDrop(event) {
  // varsayılan davranışı devre dışı bırak
  event.preventDefault();

  // kardı sürükleyip bıraktığımız section'a eriş
  const section = event.target.closest("section");

  // section veya sürüklenen kard yoksa fonksiyonu durdur
  if (!section || !draggedCardId) return;

  // yeni durumu belirle
  const newStatus = section.dataset.status;

  // state'i güncelle
  moveCard(draggedCardId, newStatus);

  // arayüzün güncellenmesi için yeniden arayüzü çiz
  render();

  // sütun vurgusunu kaldır
  section.classList.remove("drag-over");

  // sürüklenen kart verisini temizle
  draggedCardId = null;
}

// ----- sürükle & bırak sistemini başlat -------
// event-delegation
function initDragDrop() {
  // listeler üzerinde sürüklenme olaylarını izle
  const lists = document.querySelectorAll("ul");

  lists.forEach((list) => {
    list.addEventListener("dragstart", onDragStart);
    list.addEventListener("dragend", onDragEnd);
  });

  // drop ve dragover olaylarını sütunlar üzerinde izle
  const columns = document.querySelectorAll("section");

  columns.forEach((column) => {
    column.addEventListener("dragover", onDragOver);
    column.addEventListener("dragleave", onDragLeave);
    column.addEventListener("drop", onDrop);
  });
}

export { initDragDrop };
