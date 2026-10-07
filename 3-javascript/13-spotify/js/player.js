//  Tarayacının yerleşik Audio nesnesini başlatıyoruz
const audio = new Audio();

// Oynatılan şarkı state'i
let currentTrack = null;

// Yeni bir şarlıyı oynatıcaya yükleyip başlatır
export function playTrack(track) {
  if (!track) return;

  currentTrack = track; // şarkı verisini global değişkene aktar
  audio.src = track.audioUrl; // oynatılacak sesin url'ini belirle
  audio.load(); // audio nesnesine şarkıyı yükle
  audio.play(); // yüklenen şarkıyı oynat
}

// Şarkıyı duraklatır
export function pauseTrack() {
  audio.pause();
}

// Şarkı duruyorsa devam ettir, çalıyorsa duraklat
export function togglePlay() {
  if (audio.paused) {
    audio.play();
    return true;
  } else {
    audio.pause();
    return false;
  }
}

// şarkının yüzdesini göre (0-100 arası) sarma işlemi yapar
export function seekToPercent(percentage) {
  if (!audio.duration) return;
  const targetTime = (percentage / 100) * audio.duration;
  audio.currentTime = targetTime;
}

// ses seviyesini ayarla (0-1 arası)
export function setVolume(volumeLevel) {
  audio.volume = volumeLevel;
}

// sessize alır
export function toggleMute() {
  audio.muted = !audio.muted;
  return audio.muted;
}
export function setMute(isMuted) {
  audio.muted = isMuted;
}

// şuan oynatılan şarkıyı döner
export function getCurrentTrack() {
  return currentTrack;
}

// o an şarkının çalığ çalmadığını döner (true-false)
export function isPlaying() {
  return !audio.paused && audio.duration > 0;
}

// Şarkı çalma olaylarını uygulama bağlamak için dinleyeciler
export function initPlayerEvent({ onTimeUpdate, onEnded, onPlayStateChanged }) {
  // şarkı ilerledikçe çalışır
  audio.addEventListener("timeupdate", () => {
    onTimeUpdate({
      currentTime: audio.currentTime, // 30
      duration: audio.duration, // 60
      progressPercent: (audio.currentTime / audio.duration) * 100, // 50
    });
  });

  // şarkı çalmaya başladığında
  audio.addEventListener("play", () => onPlayStateChanged(true));

  // şarkı duraklatıldığında
  audio.addEventListener("pause", () => onPlayStateChanged(false));

  // şarkı sonuna gelindiğinde
  audio.addEventListener("ended", () => onEnded());
}
