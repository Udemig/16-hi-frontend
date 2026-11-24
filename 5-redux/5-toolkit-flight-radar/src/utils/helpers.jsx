import { divIcon } from "leaflet";
import { CircleQuestionMark } from "lucide-react";

// imleçlerin icon'unu oluşturan fonksiyon
export const getIcon = (flight, detailId) => {
  return divIcon({
    html: `<img src="/plane.png" alt="plane" style="width:30px;height:30px;transform:rotate(${flight.track}deg)"/>`,
    iconSize: [30, 30],
    className: !detailId ? "" : detailId === flight.id ? "active-marker" : "passive-marker",
  });
};

// nullCheck: eğer değer null veya undefined ise ? koy değilse değeri yaz
// api'dan gelen değerleri ekrana basarken kullanıcaz
export const nullCheck = (value) => {
  return value || <CircleQuestionMark title="Bilinmiyor" className="size-5" />;
};

// saniye fomratındaki tarihleri saat formatına çevir
export const formatDate = (timeSeconds) => {
  if (!timeSeconds || timeSeconds === 0) return null;

  const formatted = new Date(timeSeconds * 1000);

  return formatted.toLocaleTimeString("tr", {
    hour: "2-digit",
    minute: "2-digit",
  });
};
