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
      auidoUrl: item.link.find((i) => i.attributes?.["im:assetType"] === "preview")?.attributes?.href,
      coverUrl: item["im:image"][0].label.replace("55x55", "400x400"),
      thumbUrl: item["im:image"][0].label,
      durationSeconds: 30,
    }));

    return tracks;
  } catch (error) {
    throw error;
  }
}
