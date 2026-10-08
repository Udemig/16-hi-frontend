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

const fullnameInput = document.getElementById("fullname");
const emailInput = document.getElementById("email");
const phoneInput = document.getElementById("phone");

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

  // stepperı güncelle
  steps.forEach((step, i) => {
    const num = i + 1;
    step.classList.remove("active", "done");

    if (num === stepNumber) {
      step.classList.add("active");
    } else if (num < stepNumber) {
      step.classList.add("done");
    }
  });

  // çizgileri güncelle
  stepLines.forEach((line, i) => {
    if (i < stepNumber - 1) {
      line.classList.add("done");
    } else {
      line.classList.remove("done");
    }
  });
}

// Adım 1 -> 2
btnToStep2.addEventListener("click", () => {
  // özeti güncelle
  document.getElementById("recap-seats").textContent = selectedSeats;
  document.getElementById("recap-total").textContent = selectedSeats.length * TICKET_PRICE + "₺";

  goToStep(2);
});

// Adım 2 -> 1
btnBack1.addEventListener("click", () => {
  goToStep(1);
});

// ======= 6) Form Doğrulama =======

// doğrulama kuralları
const validationRules = {
  fullname: {
    regex: /^\p{L}{2,}(?:\s+\p{L}{2,})+$/u,
    message: "Ad ve soyad giriniz (en az 2 kelime)",
  },
  email: {
    regex: /^[A-Za-z0-9._%+-]+@[A-Za-z0-9-]+(?:\.[A-Za-z0-9-]+)*\.[A-Za-z]{2,}$/,
    message: "Geçerli bir e-posta giriniz.",
  },
  phone: {
    regex: /^05\d{2} ?\d{3} ?\d{2} ?\d{2}$/,
    message: "Geçerli bir telefon giriniz (05XX XXX XX XX)",
  },
};

// bir input alanını doğrula
function validateField(input) {
  const rule = validationRules[input.id];
  const wrapper = input.closest(".input-wrapper");
  const errorEl = document.getElementById(input.id + "-error");
  const statusEl = document.getElementById(input.id + "-status");
  const value = input.value.trim();

  // input boşsa bütün uyarıları kaldır
  if (value === "") {
    wrapper.classList.remove("valid", "invalid");
    errorEl.textContent = "";
    statusEl.textContent = "";
    return false;
  }

  // inputa yazılan yazı regexe (kurallara) uygun mu kontrol et
  if (rule.regex.test(value)) {
    // geçerli
    wrapper.classList.remove("invalid");
    wrapper.classList.add("valid");
    errorEl.textContent = "";
    statusEl.textContent = "✓";
    return true;
  } else {
    // geçersiz
    wrapper.classList.remove("valid");
    wrapper.classList.add("invalid");
    errorEl.textContent = rule.message;
    statusEl.textContent = "✗";
    return false;
  }
}

// inputlara bir şey yazılınca doğrulama fonksiyonunu çalıştır
fullnameInput.addEventListener("input", () => {
  validateField(fullnameInput);
  checkFormValidity();
});

emailInput.addEventListener("input", () => {
  validateField(emailInput);
  checkFormValidity();
});

phoneInput.addEventListener("input", () => {
  validateField(phoneInput);
  checkFormValidity();
});

// ======= 7) Buton Aktif/Pasif Kontrolü =======
function checkFormValidity() {
  const nameOk = validationRules.fullname.regex.test(fullnameInput.value.trim());
  const emailOk = validationRules.email.regex.test(emailInput.value.trim());
  const phoneOk = validationRules.phone.regex.test(phoneInput.value.trim());

  btnConfirm.disabled = !(nameOk && emailOk && phoneOk);
}

// ======= 8) Bileti Onayla -> Son Sayfaya Geç =======
btnConfirm.addEventListener("click", () => {
  // dinamik alanları doldur
  document.getElementById("ticket-name").textContent = fullnameInput.value.trim();
  document.getElementById("ticket-seats").textContent = selectedSeats.join(", ");
  document.getElementById("ticket-count").textContent = selectedSeats.length + " kişi";
  document.getElementById("ticket-total").textContent = selectedSeats.length * TICKET_PRICE + " ₺";

  goToStep(3);
});

// ======= 9) Yeni Rezervasyon -> Herşeyi Sıfırla Başa Dön =======
btnNew.addEventListener("click", () => {
  // Koltukları sıfırla
  selectedSeats = [];
  seatMap.querySelectorAll(".seat.selected").forEach((seat) => {
    seat.classList.remove("selected");
    seat.classList.add("available");
  });

  // özet ve etiketleri sıfırla
  updateSummary();
  renderSeatTags();

  // form alanlarını temizle
  fullnameInput.value = "";
  emailInput.value = "";
  phoneInput.value = "";

  // doğrulama stillerini sıfırla
  document
    .querySelectorAll(".input-wrapper")
    .forEach((el) => el.classList.remove("valid", "invalid"));
  document.querySelectorAll(".error-msg").forEach((el) => (el.textContent = ""));
  document.querySelectorAll(".input-status").forEach((el) => (el.textContent = ""));

  // bileti onayla butonunu inaktif yap
  btnConfirm.disabled = true;

  // ilk adıma dön
  goToStep(1);
});

// ======= SON) Başlat =======
createSeatMap();
