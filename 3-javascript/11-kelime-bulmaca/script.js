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
let keyState = {}; // klavyedeki harflerin ulaştuğu en yüksek renk
let guessesHistory = []; // paylaşım için satırların renk geçmişi

//! 1.3) DOM Element Referansları
const boardElement = document.getElementById("board");
const keyboardElement = document.getElementById("keyboard");
const toastContainer = document.getElementById("toast-container");
const modalOverlay = document.getElementById("modal-overlay");
const modalIcon = document.getElementById("modal-icon");
const modalTitle = document.getElementById("modal-title");
const modalMessage = document.getElementById("modal-message");
const btnRestart = document.getElementById("btn-restart");

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
  // 5 harf yazıldıysa fonksiyonu durdur
  if (currentGuess.length >= 5) return;

  // yeni harfi mevcut tahmine ekle
  currentGuess += letter;

  // aktif satıra eriş
  const row = boardElement.children[currentRow];

  // aktif kutucuğa eriş
  const tile = row.children[currentGuess.length - 1];

  // aktif kutucuğa son yazılan harfi ekle
  tile.textContent = letter;

  // yazı yazılan kutuya animasyon ver
  tile.classList.add("active", "pop");

  // animasyonu bir süre sonra kaldır
  setTimeout(() => tile.classList.remove("pop"), 120);
}

//! 2.4) Aktif Satırdan Harfi Kaldır (Delete)
function deleteLetter() {
  if (currentGuess.length === 0) return;

  const row = boardElement.children[currentRow];
  const tile = row.children[currentGuess.length - 1];
  tile.textContent = "";
  tile.classList.remove("active");

  currentGuess = currentGuess.slice(0, -1);
}

//! 2.5) Girişler İlgili Fonksiyonlara Yönlendirir
function handleInput(key) {
  // oyun bittiyse veya tahmin gösterliyorsa fonksiyonu durdur
  if (isGameOver || isRevealing) return;

  if (key === "ENTER") {
    submitGuess();
  } else if (key === "BACKSPACE") {
    deleteLetter();
  } else {
    addLetter(key);
  }
}

//! 2.6) Olay İzleme
// Fiziksel Klavye Olayı
window.addEventListener("keydown", (event) => {
  // klavyeden basılan tuş
  const key = event.key;

  // basılan harf tükçe'de var mı kontrol et
  if (key === "Enter") {
    handleInput("ENTER");
  } else if (key === "Backspace") {
    handleInput("BACKSPACE");
  } else {
    // büyük harfe çevir
    const upperLetter = key.toLocaleUpperCase("tr-TR");
    if (TURKISH_ALPHABET.includes(upperLetter)) {
      // harfi ekrana yaz
      handleInput(upperLetter);
    }
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
  handleInput(key);
});

//! 2.7) JSON Dosyasından Kelimeleri Yükleme
async function loadWordList() {
  try {
    const response = await fetch(
      "https://raw.githubusercontent.com/furkanevin/wordle/refs/heads/master/kelimeler.json",
    );

    const data = await response.json();

    // 1. Hedef Kelimler (Gizli kelime olarak seçilecek, bilenen kelimeler)
    targetList = data.hedefler.map((word) => word.toLocaleUpperCase("tr-TR"));

    // 2. Geçerli Kelimler (5k+ Tüm Türkçe Kelimeler)
    validWordSet = new Set(data.kelimeler.map((word) => word.toLocaleUpperCase("tr-TR")));

    // oyunu başlat
    initGame();
  } catch (error) {
    console.error("Kelime listesi yüklenmedi!");
  }
}

//! 2.8) Yeni Oyun Başlatma / Durumu Sıfırla
function initGame() {
  // Gizli kelimeyi hedef kelimeler arasında rastgele bir şekilde seç
  const randomIndex = Math.floor(Math.random() * targetList.length);
  secretWord = targetList[randomIndex];

  // Önceki oyundan değişen durumları sıfırla
  currentRow = 0;
  currentGuess = "";
  isGameOver = false;
  isRevealing = false;
  guessesHistory = [];
  keyState = {};

  // Bütün kutucuklardaki harfleri kaldır
  document.querySelectorAll(".tile").forEach((tile) => {
    tile.textContent = "";
    tile.className = "tile";
  });

  // Klayve tuş renklerini sıfırla
  document.querySelectorAll(".key").forEach((key) => {
    key.classList.remove("correct", "present", "absent");
  });

  // modalı kapat
  modalOverlay.classList.add("hidden");
}

//! 3. Kısım: İki Geçişli Algoritma & Renklendirme

/*
 ! 3.1 İki Geçişli Değerlendirme Algoritması (Two-Pass Algorithm)
 * 1. Geçiş: Tam doğru yerdeki (yeşil) harfler bulunur ve harf sayacı 1 düşülür.
 * 2. Geçiş: Kalanlardan sarı harfler bulunur; kelimede varsa sarı, yoksa gri işaretlenir.
 * Böylece "ELMAS" kelimesine "ALMAA" yazıldığında sadece gereken sayıda 'A' renk alır!
 */

// Tahmini gizli kelimeyle karşılaştırıp her harf için "correct" / "present" / "absent" döndüren fonksiyon
function evaluateGuess(guess, secret) {
  // Sonuç dizisini 5 elemanla, hepsi "absent" (gri) olarak başlatır
  const result = Array(5).fill("absent");
  // Gizli kelimedeki harflerin kalan kullanım hakkını tutacak nesne (ör. { a: 2, m: 1 })
  const letterCounts = {};

  // Gizli kelimedi her harfin adetini sayıyoruz
  for (let i = 0; i < 5; i++) {
    const char = secret[i];
    letterCounts[char] = (letterCounts[char] || 0) + 1;
  }

  // 1. Geçiş: Yeşil (doğru harf,doğru yer) olanları bul
  for (let i = 0; i < 5; i++) {
    // oyuncu tahmini ve gizli kelimein index sırasındaki harfi aynıysa
    if (guess[i] === secret[i]) {
      // Bu pozisyonu yeşil olarak işaretle
      result[i] = "correct";
      // Nu harfin bir hakkını tükettik, sayacı düşür
      letterCounts[guess[i]]--;
    }
  }

  // 2. Geçiş: Yeşil olmayanların arasından sarı olanları bul
  for (let i = 0; i < 5; i++) {
    // Zaten yeşil olan harfleri atla
    if (result[i] === "correct") continue;

    // Kontrol ettiğimiz karakter
    const char = guess[i];

    // Harf gizli kelimede var mı ve hala kullanılmamış hakkı kaldı mı?
    if (letterCounts[char] && letterCounts[char] > 0) {
      // Sarı olarak işaretle
      result[i] = "present";
      // Nu harfin bir hakkını tükettik, sayacı düşür
      letterCounts[char]--;
    }
  }

  // Sonuç dizisini döndür ["c","a","p","a","a"]
  return result;
}

//! 3.2 Kutuları Sırayla Çeviren ve Boyayan Animasyon
function paintRow(rowIndex, result, onComplete) {
  // yeni harf girdisi kitle
  isRevealing = true;

  // boyayacağımız kutucuklara eriş
  const row = boardElement.children[rowIndex];
  const tiles = Array.from(row.children);

  // kutcukların herbiri için
  tiles.forEach((tile, index) => {
    // her kutuya 250ms gecikmeli dönme animasyonu ver
    setTimeout(() => {
      // dönme animasyonu ver
      tile.classList.add("flip");

      // kutunun tam 90 derece dik olduğu anda arkaplan rengini ver
      setTimeout(() => {
        tile.classList.add(result[index]);
      }, 250);

      // Son kutu döndükten sonra kilitleri aç ve sonraki adıma geç
      if (index === 4) {
        setTimeout(() => {
          isRevealing = false;
          onComplete();
        }, 500);
      }
    }, 250 * index);
  });
}

//! 3.3 Ekran Klavyesindeki Tuşları Öncelik Kuralına Göre Boya (Yeşil > Sarı > Gri)
function updateKeyboard(guess, result) {
  for (let i = 0; i < 5; i++) {
    // tahmin kelimesindeki index sırasındaki harfe eriş
    const letter = guess[i];

    // harfin sonuç durumunu al
    const status = result[i];

    // öncelikli rengi belirlememek için harfin renk skorunu belirle
    const currenScore = STATUS_PRIORITY[keyState[letter]] || 0;

    // harfin yeni renk skoru
    const newScore = STATUS_PRIORITY[status];

    // yeni tahmin skoru önceki tahmnin skorundan daha büyükse rengi değiştir
    if (newScore > currenScore) {
      // tahmin edilen kelimedeki harflerin güncel renklerini belirle
      keyState[letter] = status;

      // boyanacak harfi ekrandan al
      const keyBtn = document.querySelector(`.key[data-key="${letter}"]`);

      if (keyBtn) {
        // önceki tahminden bir rengi varsa kaldır
        keyBtn.classList.remove("absent", "present", "correct");
        // yeni tahminde elde edilen rengi ver
        keyBtn.classList.add(status);
      }
    }
  }
}

//! 3.4 Tahmini GÖnderme
function submitGuess() {
  // 1. Kural: 5 harf yazılmış mı?
  if (currentGuess.length < 5) {
    shakeCurrentRow();
    showToast("Yetersiz harf!");
    return;
  }

  // 2. Kural: Oyuncunun kelimesi geçerli kelime listemizde var mı?
  if (!validWordSet.has(currentGuess)) {
    shakeCurrentRow();
    showToast("Kelime listede yok!");
    return;
  }

  // Tahmini değerlendir ve geçmişe kaydet
  const result = evaluateGuess(currentGuess, secretWord);
  guessesHistory.push(result);

  // Önce Kutuları boya sonra klavyeyi güncelle
  paintRow(currentRow, result, () => {
    updateKeyboard(currentGuess, result);

    // tahmin doğruysa oyunu bitir
    if (currentGuess === secretWord) {
      endGame(true);
    } else if (currentRow === 5) {
      endGame(false);
    } else {
      // sonraki satıra geç
      currentRow++;
      currentGuess = "";
    }
  });
}

//! 4 Oyun Bitişi, Yeniden Dene

// 4.1 Kazanınca Çalışacak Konfeti Efekti
function triggerConfetti() {
  // konfeti renkleri
  const colors = ["#10b891", "#f59e0b", "#38bdf8", "#ec4899", "#8b5cf6"];

  // 50 konfeti oluştur
  for (let i = 0; i < 50; i++) {
    // konfeti elementi oluştu
    const confetti = document.createElement("div");
    // elemente css sınıfı tanımla
    confetti.className = "confetti-piece";
    // x ekseninde rastgele bir konuma hizala
    confetti.style.left = Math.random() * 100 + "vw";
    // rastgele bir renk ver
    confetti.style.backgroundColor = colors[Math.floor(Math.random() * colors.length)];
    // minimum 1.5sn max 3.5sn'de düşme animasyonu ver
    confetti.style.animationDuration = Math.random() * 2 + 1.5 + "s";
    // max 0.2s daha geç başlama ihtimali ver
    confetti.style.animationDelay = Math.random() * 0.2 + "s";
    // konfetiyi ekrana gönder
    document.body.appendChild(confetti);
    // animasyon sonunda konfeti elementlerini DOM'dan kaldır
    setTimeout(() => confetti.remove(), 4000);
  }
}

// 4.2 Oyun Sonu Kartını Açma
function endGame(isWin) {
  isGameOver = true;

  setTimeout(() => {
    modalOverlay.classList.remove("hidden");

    // kazandıysa
    if (isWin) {
      modalIcon.textContent = "🎉";
      modalTitle.textContent = "Tebrikler!";
      modalMessage.innerHTML = `Gizli kelimeyi <strong>${currentRow + 1}.</strong> denemede bildin!`;
      triggerConfetti();
    } else {
      modalIcon.textContent = "😔";
      modalTitle.textContent = "Oyun Bitti!";
      modalMessage.innerHTML = `Doğru kelime <strong>${secretWord}</strong>`;
    }
  }, 600);
}

// 4.3 Yeniden Oyna
btnRestart.addEventListener("click", () => {
  // oyunu yeniden başlatma fonksiyonu
  initGame();
  // bildirim gönder
  showToast("Yeni oyun başladı 🍀");
});

// SON: Kelimleri Yükle ve Oyunun Başlat
loadWordList();
