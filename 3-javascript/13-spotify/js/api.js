// Apple Music'in o an en çok dinlenen güncel popüler şarkılarını (Top 50) getirir.
export async function getTopTracks() {
  const url = "https://itunes.apple.com/tr/rss/topsongs/limit=50/json";

  try {
    const res = await fetch(url);
    if (!res.ok) throw new Error("Popüler şarkılar getirilemedi");

    const data = await res.json();

    // veriyi daha yalın bir formata getir
    const tracks = data.feed.entry.map((item) => ({
      id: item.id.attributes["im:id"],
      title: item["im:name"].label,
      artist: item["im:artist"].label,
      album: item["im:collection"]["im:name"].label,
      audioUrl: item.link.find((i) => i.attributes?.["im:assetType"] === "preview")?.attributes?.href,
      coverUrl: item["im:image"][0].label.replace("55x55", "400x400"),
      thumbUrl: item["im:image"][0].label,
      durationSeconds: 30,
    }));

    return tracks;
  } catch (error) {
    throw error;
  }
}

// API'dan arama sonuçlarını getirir
export async function searchTracks(query) {
  // araöa kelimesindeki özel karaktleri URL uyumlu hale getir
  const encodedQuery = encodeURIComponent(query.trim());
  const requestUrl = `https://itunes.apple.com/search?term=${encodedQuery}&entity=song&limit=50`;

  try {
    const response = await fetch(requestUrl);

    if (!response.ok) throw new Error("Bağlantı hatası: Sunucu Yanıt vermedi");

    const data = await response.json();

    // API'dan dönen veriyi istediğimiz formata çevir
    const tracks = data.results.map((item) => ({
      id: item.trackId,
      title: item.trackName,
      artist: item.artistName,
      album: item.collectionName,
      audioUrl: item.previewUrl,
      coverUrl: item.artworkUrl100.replace("100x100", "400x400"),
      thumbUrl: item.artworkUrl60,
      durationSeconds: Math.floor(item.trackTimeMillis / 1000),
    }));

    // Sadece çalma linki olan şarkları return et
    return tracks.filter((track) => Boolean(track.audioUrl));
  } catch (error) {
    throw error;
  }
}
