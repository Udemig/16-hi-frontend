import Head from "./Head";
import Gallery from "./Gallery";
import Airport from "./Airport";
import Time from "./Time";
import Aircraft from "./Aircraft";
import { useEffect } from "react";

const Modal = ({ detailId, close }) => {
  // seçi uçuşun detayını al
  useEffect(() => {
    // dispatch
    console.log(detailId);
  });

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
        <Head />

        <div className="flex-1 flex flex-col gap-5 mt-5 justify-between">
          <div className="flex flex-col gap-5">
            <Gallery />
            <Airport />
            <Time />
          </div>

          <Aircraft />
        </div>
      </div>
    </div>
  );
};

export default Modal;
