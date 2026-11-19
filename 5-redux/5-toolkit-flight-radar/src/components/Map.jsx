import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import "leaflet/dist/leaflet.css";
import { useSelector } from "react-redux";
import PlaneMarker from "./PlaneMarker";
import Modal from "./modal";
import { useCallback, useState } from "react";

const Map = () => {
  // uçuş detay state'i
  const [detailId, setDetailId] = useState(null);

  // store'a abone ol
  const { flights, searchTerm } = useSelector((store) => store.flightReducer);

  // aratılan kaliemeye göre filtrele
  const filtredFlights = searchTerm
    ? flights.filter((i) => i.callsign.toLowerCase().includes(searchTerm.toLowerCase()))
    : flights;

  // modal'ı kapatma fonksiyonu
  // useCallback sayesinde fonksiyon her render anında yeniden oluşturulmayacak
  const close = useCallback(() => setDetailId(null), []);

  return (
    <>
      <MapContainer
        center={[38.954785, 35.445834]}
        zoom={6}
        scrollWheelZoom={true}
        className="h-[calc(100vh-74px)]"
      >
        <TileLayer
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />

        {/* Uçaklar */}
        {filtredFlights.map((flight) => (
          <PlaneMarker
            flight={flight}
            key={flight.id}
            detailId={detailId}
            setDetailId={setDetailId}
          />
        ))}
      </MapContainer>

      <Modal detailId={detailId} close={close} />
    </>
  );
};

export default Map;
