import { useDispatch } from "react-redux";
import Header from "./components/Header";
import Map from "./components/Map";
import { useEffect } from "react";
import { getFligts } from "./redux/actions";

const App = () => {
  const dispatch = useDispatch();

  // sayfa yüklenince thunk aksiyonunu çalıştır
  // thunk aksiyonu: api'dan uçuş veirlierini alıp store'a haber vericek
  useEffect(() => {
    dispatch(getFligts());
  }, []);

  return (
    <div>
      <Header />

      <Map />
    </div>
  );
};

export default App;
