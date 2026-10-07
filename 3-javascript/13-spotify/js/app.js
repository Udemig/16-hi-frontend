import { getTopTracks, searchTracks } from "./api.js";
import { ui, renderSongList, updateActiveListItem, renderTrackDetails, updateMuteButton, updatePlayButton, updateProgressUI } from "./ui.js";
import { playTrack, togglePlay, seekToPercent, setVolume, toggleMute, initPlayerEvent, setMute } from "./player.js";

//! ======= Uygulama Durumu (State) =======
let currentTracks = []; // listelenicek şarkılar
let currentTrackIndex = -1; // çalınan şarkının liste indexi

//! ======= Fonksiyonlar =======

// AppleMusic'den güncel Top 50 şarkıları alıp ekrana bas
async function loadTopTracks() {
  ui.sectionHeading.textContent = "Günün Popüler Parçaları • Top 50";

  try {
    currentTracks = await getTopTracks();
    ui.statusBox.textContent = `${currentTracks.length} şarkı listelendi`;

    renderSongList(currentTracks, null, (track, index) => {
      playTrackAtIndex(index);
    });
  } catch (error) {}
}

// Kullanıcın yazdığı terim üzeirnden şarkı arar
async function performSearch(query) {
  if (!query || !query.trim === "") return;

  // başlığı güncelle
  ui.sectionHeading.textContent = `"${query}" Arama Sonuçları`;
  ui.statusBox.textContent = "Yükleniyor...";

  try {
    currentTracks = await searchTracks(query);

    if (currentTracks.length === 0) {
      ui.statusBox.textContent = "Eşleşen şarkı bulunamadı";
      ui.songList.innerHTML = "";
      return;
    }

    ui.statusBox.textContent = `${currentTracks.length} sonuç bulundu`;

    renderSongList(currentTracks, null, (track, index) => playTrackAtIndex(index));
  } catch (error) {}
}

// Belirletilen indeksteki şarkıyı başlatır ve arayüzü günceller (örn: index:2)
function playTrackAtIndex(index) {
  if (index < 0 || index >= currentTracks.length) return;

  currentTrackIndex = index; // global değişkeni güncelle

  const track = currentTracks[index]; // indexi bilinen şarkıyı bul

  playTrack(track); // şarkıyı çalmaya başla

  updateActiveListItem(index); // listedeki atkif şarkıyı güncelle

  renderTrackDetails(track); // arayüzü güncelle
}

// Sıradaki şarkıyı geç
function playNextTrack() {
  if (currentTracks.length === 0) return;
  const nextIndex = (currentTrackIndex + 1) % currentTracks.length;
  playTrackAtIndex(nextIndex);
}

// Önceki şarkıya geç
function playPrevTrack() {
  if (currentTracks.length === 0) return;
  const prevIndex = (currentTrackIndex - 1 + currentTracks.length) % currentTracks.length;
  playTrackAtIndex(prevIndex);
}

//! ======= Olay Dinleyicileri =======

// Arama formu gönderildiğinde
ui.searchForm.addEventListener("submit", (e) => {
  e.preventDefault();
  performSearch(ui.searchInput.value);
});

// Sol menüdeki kategorileri tıklama
document.querySelectorAll("[data-genre]").forEach((element) => {
  element.addEventListener("click", () => {
    // diğer türlerden kaldırıp tıkanan türe aktif sınıfı ver
    document.querySelectorAll("[data-genre]").forEach((el) => el.classList.remove("active"));
    element.classList.add("active");

    // seçili türün ismine eriş
    const genre = element.dataset.genre;
    ui.searchInput.value = genre;
    performSearch(genre);
  });
});

// Ana sayfaya tıklama
ui.homeBtn.addEventListener("click", loadTopTracks);

// Önceki ve sonraki butonlarına tıklama
ui.nextBtn.addEventListener("click", playNextTrack);
ui.prevBtn.addEventListener("click", playPrevTrack);

// Oynat duraklat butonuna tıklama
ui.playBtn.addEventListener("click", () => {
  // eğer henü şarkı seçilmemiş ilk şarkıdan başla
  if (currentTrackIndex === -1 && currentTracks.length > 0) {
    playTrackAtIndex(0);
    return;
  }
  togglePlay();
});

// Ses seviyesi beilrleme
ui.volumeSlider.addEventListener("input", (e) => {
  setVolume(e.target.value);

  if (e.target.value == 0) {
    setMute(true);
    updateMuteButton(true);
  } else {
    setMute(false);
    updateMuteButton(false);
  }
});

// Sessize alma
ui.muteBtn.addEventListener("click", () => {
  const isMuted = toggleMute(); // sessize alır
  updateMuteButton(isMuted); // iconu günceller
});

// Süre ileri/geri alma
ui.seekSlider.addEventListener("input", (e) => {
  seekToPercent(e.target.value);
});

// Oynatı eventlerini bağla
initPlayerEvent({
  // şarkı çaldıkça süre ve ilerleme çubuğu günceller
  onTimeUpdate: ({ currentTime, duration, progressPercent }) => {
    updateProgressUI(currentTime, duration, progressPercent);
  },

  // çalma durumu değiştikçe play/pause ikonu günceller
  onPlayStateChanged: (isPlaying) => {
    updatePlayButton(isPlaying);
  },

  // şarkı bittiğinde otomatik bir sonraki şarkıya geçer
  onEnded: () => {
    playNextTrack();
  },
});

// Sayfa ilk açıldığında Popüler Şarkıları yükle
loadTopTracks();
