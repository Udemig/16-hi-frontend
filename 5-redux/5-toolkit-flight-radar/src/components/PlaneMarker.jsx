import { Marker, Popup } from "react-leaflet";
import { getIcon } from "../utils/helpers";

const PlaneMarker = ({ flight, detailId, setDetailId }) => {
  return (
    <Marker position={[flight.lat, flight.lon]} icon={getIcon(flight, detailId)}>
      <Popup>
        <div className="flex flex-col gap-1">
          <span className="font-semibold text-center">{flight.callsign || "Bilinmiyor"}</span>
          <div className="text-xs text-zinc-500 text-center">
            <p>Hız: {Math.round(flight.speed * 1.852)} km/s</p>
            <p>İrtifa: {Math.round(flight.alt * 0.3048)} m</p>
          </div>
          <button
            className="px-4 py-1 border rounded-sm hover:bg-black/10"
            onClick={() => setDetailId(flight.id)}
          >
            Detay
          </button>
        </div>
      </Popup>
    </Marker>
  );
};

export default PlaneMarker;
