// ------ Sabitler ------
const ROWS = 6;
const COLS = 8;
const TICKET_PRICE = 85;
const ROW_LABELS = ["A", "B", "C", "D", "E", "F"];
const OCCUPIED_SEATS = [
  "A3",
  "A4",
  "B6",
  "B7",
  "C2",
  "C3",
  "D4",
  "D5",
  "D6",
  "E1",
  "E7",
  "E8",
  "F3",
  "F4",
];

// ------ DOM Elementleri ------
const seatMap = document.getElementById("seat-map");
const selectedCountEl = document.getElementById("selected-count");
const totalPriceEl = document.getElementById("total-price");
const selectedTagsEl = document.getElementById("selected-tags");

const btnToStep2 = document.getElementById("btn-to-step2");
const btnBack1 = document.getElementById("btn-back-1");
const btnConfirm = document.getElementById("btn-confirm");
const btnNew = document.getElementById("btn-new");

// ------ Global Değişkenler (State) ------
let selectedSeats = [];

// ======== 1) Koltuk Haritasını Oluştur ========
function createSeatMap() {
  for (let r = 0; r < ROWS; r++) {
    // satır elementi oluştur
    const rowDiv = document.createElement("div");
    rowDiv.classList.add("seat-row");

    // sol satır etiketlerini oluştur (A,B,C)
    const labelLeft = document.createElement("span");
    labelLeft.classList.add("row-label");
    labelLeft.textContent = ROW_LABELS[r];
    rowDiv.appendChild(labelLeft);

    // Satır içerisinde koltukları oluştur
    for (let c = 0; c < COLS; c++) {
      // 4. koltuktan sonra koridor boşluğu ekle
      if (c === 4) {
        const aisle = document.createElement("span");
        aisle.classList.add("seat-aisle");
        rowDiv.appendChild(aisle);
      }

      // koltuk elementi oluştur
      const seatId = ROW_LABELS[r] + (c + 1);
      const btn = document.createElement("button");
      btn.classList.add("seat");
      btn.textContent = c + 1;
      btn.dataset.seatId = seatId;

      // dolu mu kontrol et
      if (OCCUPIED_SEATS.includes(seatId)) {
        btn.classList.add("occupied");
        btn.disabled = true;
      } else {
        btn.classList.add("available");
      }

      // koltuğu satıra ekle
      rowDiv.appendChild(btn);
    }

    // sağ satır etiketlerini oluştur (A,B,C)
    const labelRight = document.createElement("span");
    labelRight.classList.add("row-label");
    labelRight.textContent = ROW_LABELS[r];
    rowDiv.appendChild(labelRight);

    // satırı ekrana gönder
    seatMap.appendChild(rowDiv);
  }
}

// ======= 2) Koltuk Tıklama (Event Delegation) =======
seatMap.addEventListener("click", function (e) {
  const btn = e.target; // tıklanan element

  // koltuk dışında bir şeye tıklanırsa fonksiyonu durdur
  if (!btn.classList.contains("seat")) return;
  // tıklanan koltuk doluysa fonksiyonu durdur
  if (btn.classList.contains("occupied")) return;

  const seatId = btn.dataset.seatId; // koltuk idsi

  if (!btn.classList.contains("selected")) {
    // koltuğu seç
    btn.classList.remove("available");
    btn.classList.add("selected");
    // diziye koltuğu ekle
    selectedSeats.push(seatId);
  } else {
    // seçimi kaldır
    btn.classList.remove("selected");
    btn.classList.add("available");
    // diziden koltuğu kaldır
    const index = selectedSeats.indexOf(seatId);
    selectedSeats.splice(index, 1);

    // filter yöntemi
    // selectedSeats = selectedSeats.filter((s) => s !== seatId);
  }

  // Arayüzü güncelle
  updateSummary();
  renderSeatTags();
});

// ======= 3) Özet Güncelleme =======
function updateSummary() {
  const count = selectedSeats.length; // seçili koltuk sayısı
  const total = count * TICKET_PRICE; // toplam fiyat

  selectedCountEl.textContent = count;
  totalPriceEl.textContent = total + "tl";

  // koltuk seçilmediyse devam et butonunu pasif yap
  btnToStep2.disabled = count === 0;
}

// ======= 4) Seçili Koltuk Etiketlerini Göster =======
function renderSeatTags() {
  // mevcut etiketleri temizle
  selectedTagsEl.innerHTML = "";

  // seçili koltuklar dizisindeki her bir element için etiket oluştur
  selectedSeats.sort().forEach((seatId) => {
    const tag = document.createElement("span");
    tag.classList.add("seat-tag");
    tag.textContent = seatId;
    selectedTagsEl.appendChild(tag);
  });
}

// ======= 5) Adım Geçişleri =======
const pages = document.querySelectorAll(".page");
const steps = document.querySelectorAll(".step");
const stepLines = document.querySelectorAll(".step-line");

// Belirli adıma yönledir
function goToStep(stepNumber) {
  // tüm sayfaları gizle, parametre olarak gelen sayfayı göster
  pages.forEach((page) => {
    page.classList.remove("page-active");
  });
  document.getElementById("page-" + stepNumber).classList.add("page-active");

  // todo: stepperı güncelle
}

// Adım 1 -> 2
btnToStep2.addEventListener("click", () => {
  // todo: özeti güncelle

  goToStep(2);
});

// Adım 2 -> 1
btnBack1.addEventListener("click", () => {
  goToStep(1);
});

// ======= SON) Başlat =======
createSeatMap();
