import { Marker, Popup } from "react-leaflet";
import { nullCheck as c } from "../utils/helpers";

const AirportMarker = ({ title, info }) => {
  return (
    <Marker position={[info?.position?.latitude, info?.position?.longitude]}>
      <Popup>
        <div className="text-center flex flex-col gap-2">
          <span className="font-semibold">{title}</span>

          <span className="font-bold">{c(info?.name)}</span>

          <div className="text-zinc-500">
            <span>{c(info?.position?.country?.name)}</span> /
            <span> {c(info?.position?.region?.city)}</span>
          </div>
        </div>
      </Popup>
    </Marker>
  );
};

export default AirportMarker;
