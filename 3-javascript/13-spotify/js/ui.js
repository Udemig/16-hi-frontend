// Arayüz Elementleri
export const ui = {
  searchForm: document.querySelector("#search-form"),
  searchInput: document.querySelector("#search-input"),

  sectionHeading: document.querySelector("#section-heading"),
  statusBox: document.querySelector("#status-box"),
  homeBtn: document.querySelector("#home"),

  playBtn: document.querySelector("#play-btn"),
  prevBtn: document.querySelector("#prev-btn"),
  nextBtn: document.querySelector("#next-btn"),
  currentTime: document.querySelector("#current-time"),
  durationTime: document.querySelector("#duration-time"),
  seekSlider: document.querySelector("#seek-slider"),
  volumeSlider: document.querySelector("#volume-slider"),
  muteBtn: document.querySelector("#mute-btn"),
  songList: document.querySelector("#song-list"),
  playerThumb: document.querySelector("#player-thumb"),
  playerTitle: document.querySelector("#player-title"),
  playerArtist: document.querySelector("#player-artist"),

  panelCover: document.querySelector("#panel-cover"),
  panelTitle: document.querySelector("#panel-title"),
  panelArtist: document.querySelector("#panel-artist"),
  panelAlbum: document.querySelector("#panel-album"),
};

// Şarkı dizisini tablo formatında ekrana yazar
export function renderSongList(tracks, activeTrackId, onTrackClick) {
  ui.songList.innerHTML = "";

  tracks.forEach((track, index) => {
    const li = document.createElement("li");
    if (track.id === activeTrackId) li.classList.add("active");

    li.innerHTML = `
            <span class="song-index">${index + 1}</span>
              <div class="song-main">
                <img src="${track.thumbUrl}" alt="${track.title}" />
                <div class="song-meta">
                  <h4>${track.title}</h4>
                  <p>${track.artist}</p>
                </div>
              </div>
              <span class="song-album">${track.album}</span>
            <span class="song-duration">${formatTime(track.durationSeconds)}</span>
    `;

    li.addEventListener("click", () => onTrackClick(track, index));
    ui.songList.appendChild(li);
  });
}

// Süreyi formatlayan fonksiyon
// Örneğin: 223 saniye ----> 3:43
export function formatTime(seconds) {
  if (isNaN(seconds) || seconds < 0) return "0:00";

  const mins = Math.floor(seconds / 60);
  const secs = Math.floor(seconds % 60);

  return `${mins}:${secs < 10 ? "0" : ""}${secs}`;
}

// Listedeki aktif şarkı vurgusunu günceller
export function updateActiveListItem(activeIndex) {
  const allItems = ui.songList.querySelectorAll("li");

  allItems.forEach((item, index) => {
    item.classList.toggle("active", index === activeIndex);
  });
}

// Çalınan şarkı bilgilerini alt bara ve sağ panele yansıtır
export function renderTrackDetails(track) {
  if (!track) return;

  ui.playerThumb.src = track.thumbUrl;
  ui.playerTitle.textContent = track.title;
  ui.playerArtist.textContent = track.artist;

  ui.panelCover.src = track.coverUrl;
  ui.panelTitle.textContent = track.title;
  ui.panelArtist.textContent = track.artist;
  ui.panelAlbum.textContent = track.album;
}

// Kullanıcnın ilerleme çubuğunu tutup kaydırıp kaydırmadığını takip ediyoruz
let isSeeking = false;
ui.seekSlider.addEventListener("mousedown", () => {
  isSeeking = true;
});
ui.seekSlider.addEventListener("mouseup", () => {
  isSeeking = false;
});
ui.seekSlider.addEventListener("touchstart", () => {
  isSeeking = true;
});
ui.seekSlider.addEventListener("touchend", () => {
  isSeeking = false;
});

// Süre metinlerini ve ilerleme çubuğunu günceller
export function updateProgressUI(currentTime, duration, progressPercent) {
  ui.currentTime.textContent = formatTime(currentTime);
  ui.durationTime.textContent = formatTime(duration);

  if (!isSeeking) {
    ui.seekSlider.value = progressPercent || 0;
  }
}

// Çal/Duraklat butonun iconunu değiştir
export function updatePlayButton(isPlaying) {
  ui.playBtn.innerHTML = isPlaying ? '<i class="bi bi-pause-fill"></i>' : '<i class="bi bi-play-fill"></i>';
}

// Ses butonun iconunu güncelle
export function updateMuteButton(isMuted) {
  ui.muteBtn.innerHTML = isMuted ? '<i class="bi bi-volume-mute-fill"></i>' : '<i class="bi bi-volume-up-fill"></i>';
}
