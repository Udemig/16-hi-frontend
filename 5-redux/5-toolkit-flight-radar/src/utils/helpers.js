import { divIcon } from "leaflet";

// imleçlerin icon'unu oluşturan fonksiyon
export const getIcon = (flight, detailId) => {
  return divIcon({
    html: `<img src="/plane.png" alt="plane" style="width:30px;height:30px;transform:rotate(${flight.track}deg)"/>`,
    iconSize: [30, 30],
    className: !detailId ? "" : detailId === flight.id ? "active-marker" : "passive-marker",
  });
};
