//! 1. Kısım: Sabitler ve Ekranı Çizme

//! 1.1) Sabitler
// alfabe
const TURKISH_ALPHABET = "ABCÇDEFGĞHIİJKLMNOÖPRSŞTUÜVYZ";

// klavye düzeni
const KEYBOARD_LAYOUT = [
  ["E", "R", "T", "Y", "U", "I", "O", "P", "Ğ", "Ü"],
  ["A", "S", "D", "F", "G", "H", "J", "K", "L", "Ş", "İ"],
  ["ENTER", "Z", "C", "V", "B", "N", "M", "Ö", "Ç", "BACKSPACE"],
];

// tuş renkleri için öncelik: yeşil > sarı > gri
const STATUS_PRIORITY = { correct: 3, present: 2, absent: 1 };

//! 1.2) Oyun Durumları (Game State)
let targetList = []; // gizli kelime havuzu (500+)
let validWordSet = new Set(); // geçerli tahmin havuzu (5000+)
let secretWord = ""; // rastgele seçilen gizli kelime
let currentRow = 0; // oyuncunun bulunduğu satır (0-5)
let currentGuess = ""; // mevcut satıra yazılan harfler
let isGameOver = false; // oyun bitti mi
let isRevealing = false; // kutular dönüyor mu (klavyeyi kitle)
const keyState = {}; // klavyedeki harflerin ulaştuğu en yüksek renk
const guessesHistory = []; // paylaşım için satırların renk geçmişi

//! 1.3) DOM Element Referansları
const boardElement = document.getElementById("board");
const keyboardElement = document.getElementById("keyboard");
const toastContainer = document.getElementById("toast-container");

//! 1.4) Oyun Tahtasını (6x5) Dinamik Oluşturma
function createBoard() {
  // eskiden kalan bir içerik varsa temizle
  boardElement.innerHTML = "";

  // 6 satır oluştur
  for (let r = 0; r < 6; r++) {
    const row = document.createElement("div");
    row.className = "board-row";

    // her satır içerisinden 5 kutu oluştur
    for (let c = 0; c < 5; c++) {
      const tile = document.createElement("div");
      tile.className = "tile";
      row.appendChild(tile);
    }

    // satırı oyun tahtasına ekle
    boardElement.appendChild(row);
  }
}

//! 1.5) Ekran Klavyesini Dinamik Oluşturma
function createKeyboard() {
  // daha önceden ekrana basılan bir içerik varsa temizle
  keyboardElement.innerHTML = "";

  // klavye satırlarını ekrana bas
  KEYBOARD_LAYOUT.forEach((rowKeys) => {
    // satır elementi oluştur
    const rowDiv = document.createElement("div");
    rowDiv.className = "keyboard-row";

    // satır içerisine her bir harf için buton oluştur
    rowKeys.forEach((key) => {
      const button = document.createElement("button");
      button.className = "key";
      button.type = "button";
      button.setAttribute("data-key", key);

      if (key === "BACKSPACE") {
        button.textContent = "⌫";
        button.classList.add("delete-key");
      } else if (key === "ENTER") {
        button.textContent = "ENTER";
        button.classList.add("wide-key");
      } else {
        button.textContent = key;
      }

      // butonu satır elementi içerisine ekle
      rowDiv.appendChild(button);
    });

    // satırı ekrandaki klavye kısmına gönder
    keyboardElement.appendChild(rowDiv);
  });
}

//! 1.6) Tahtayı ve Klavyeyi ekrana çiz
createBoard();
createKeyboard();

//! 2. KISIM: Kelimeleri Çekme & Harf Girişleri

//! 2.1) Ekrana Bildirim Gönderme
function showToast(message) {
  // bildirim elementini oluştur
  const toast = document.createElement("div");
  // sınıfını belirle
  toast.className = "toast";
  // parametre olarak gelen mesajı bildirim içine yaz
  toast.textContent = message;
  // bildirimi ekrandaki bildirim container'ına gönder
  toastContainer.appendChild(toast);
  // 2 saniye sonra elementi kaldır
  setTimeout(() => toast.remove(), 2000);
}

//! 2.2) Hatalı Girişte Satırı Sallama
function shakeCurrentRow() {
  // kullanıcın bulunduğu satır elementine erişme
  const row = boardElement.children[currentRow];
  // sallanma sınıfı ver
  row.classList.add("shake");
  // animayon bitince sınıfı kaldır
  setTimeout(() => row.classList.remove("shake"), 500);
}

//! 2.3) Aktif Satıra Harf Ekleme
function addLetter(letter) {
  console.log("GELEN HARF: ", letter);
}

// Fiziksel Klavye Olayı
window.addEventListener("keydown", (event) => {
  // klavyeden basılan tuş
  const key = event.key;

  // büyük harfe çevir
  const upperLetter = key.toLocaleUpperCase("tr-TR");

  // basılan harf tükçe'de var mı kontrol et
  if (TURKISH_ALPHABET.includes(upperLetter)) {
    // harfi ekrana yaz
    addLetter(upperLetter);
  }
});

// SANAL KLAVYE Olayı
keyboardElement.addEventListener("click", (event) => {
  // tıklanılan yerdeki key sınıfına sahip elemente eriş
  const button = event.target.closest(".key");

  // key sınıfına sahip element yoksa fonksiyonu durdur
  if (!button) return;

  // butonun key değerine eriş
  const key = button.getAttribute("data-key");

  // harfi ekrana yaz
  addLetter(key);
});
