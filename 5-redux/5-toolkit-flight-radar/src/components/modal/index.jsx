import Head from "./Head";
import Gallery from "./Gallery";
import Airport from "./Airport";
import Time from "./Time";
import Aircraft from "./Aircraft";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getDetails } from "../../redux/actions";
import Loader from "./../Loader";
import Error from "./../Error";

const Modal = ({ detailId, close }) => {
  const dispatch = useDispatch();
  const { loading, error, info } = useSelector((store) => store.detailReducer);

  // seçili uçuşun detayını al
  useEffect(() => {
    // dispatch
    dispatch(getDetails(detailId));
  }, [detailId]);

  // esc tuşu ile kapat
  useEffect(() => {
    if (!detailId) return;

    // eğer esc tuşuna basılırsa modalı kapat
    const onKey = (e) => e.key === "Escape" && close();
    window.addEventListener("keydown", onKey);

    // bileşen ekrandan ayrılınca olay dinleyicisini durdur
    return () => window.removeEventListener("keydown", onKey);
  }, [detailId]);

  if (!detailId) return null;

  return (
    <div className="fixed top-0 left-0 h-screen flex items-center z-999999! max-sm:justify-center max-sm:inset-0 max-sm:backdrop-blur-xs">
      <div className="w-90 max-sm:w-[70%] min-h-9/12 ml-4 gradient text-white rounded-3xl flex flex-col p-5 shadow-2xl mt-10 overflow-y-auto">
        <Head loading={loading} error={error} info={info} close={close} />

        {loading ? (
          <Loader />
        ) : error ? (
          <Error message={error} retry={() => dispatch(getDetails(detailId))} />
        ) : (
          <div className="flex-1 flex flex-col gap-5 mt-5 justify-between">
            <div className="flex flex-col gap-5">
              <Gallery images={info?.aircraft?.images} />
              <Airport airportData={info?.airport} />
              <Time timeData={info?.time} />
            </div>

            <Aircraft aircraftData={info?.aircraft} />
          </div>
        )}
      </div>
    </div>
  );
};

export default Modal;
