import { useDispatch } from "react-redux";
import Footer from "./components/Footer";
import Header from "./components/Header";
import History from "./components/History";
import LanguageSelector from "./components/LanguageSelector";
import TextContainer from "./components/TextContainer";
import { useEffect } from "react";
import { getLanguages } from "./redux/actions";
import Button from "./components/Button";

const App = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getLanguages());
  }, []);

  return (
    <div className="min-h-screen bg-linear-to-br from-zinc-900 via-zinc-800 to-zinc-900 text-white grid place-items-center">
      <div className="mx-auto w-full py-8 px-4">
        <div className="max-w-6xl w-full mx-auto space-y-8">
          <Header />

          <div className="bg-zinc-800/60 backdrop-blur-sm rounded-2xl border border-zinc-700/50 shadow-2xl p-6">
            <LanguageSelector />

            <TextContainer />

            <Button />
          </div>

          <History />

          <Footer />
        </div>
      </div>
    </div>
  );
};

export default App;
