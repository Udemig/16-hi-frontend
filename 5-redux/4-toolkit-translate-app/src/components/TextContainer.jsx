import { ArrowRight, Volume2 } from "lucide-react";
import { useDispatch, useSelector } from "react-redux";
import { setText, clear } from "../redux/slices/translateSlice";
import Loader from "./Loader";

const TextContainer = () => {
  const dispatch = useDispatch();
  const { loading, textToTranslate, translatedText, sourceLang, targetLang } = useSelector(
    (store) => store.translateReducer,
  );

  // kaynak metni seslendir
  const handleSpeakSource = () => {
    //  devam eden bir seslendirme varsa onu durdur
    window.speechSynthesis.cancel();

    // dil seçili değilse seslendirmeyi iptal et
    if (!sourceLang.value) return;

    // SpeechSynthesisUtterance: seslendirilecek metni ve ayarlarını tutan bir nesne oluşturur
    const utterance = new SpeechSynthesisUtterance(textToTranslate);

    // utterance.lang: hangi dilde / aksanda seslendirileceğini belirle
    utterance.lang = sourceLang.value;

    // speak: oluşturulan utterance nesnesini seslendirmeyi başlatır
    window.speechSynthesis.speak(utterance);
  };

  // çevirlen metni seslendir
  const handleSpeakTarget = () => {
    //  devam eden bir seslendirme varsa onu durdur
    window.speechSynthesis.cancel();

    // dil seçili değilse seslendirmeyi iptal et
    if (!targetLang.value) return;

    // SpeechSynthesisUtterance: seslendirilecek metni ve ayarlarını tutan bir nesne oluşturur
    const utterance = new SpeechSynthesisUtterance(translatedText);

    // utterance.lang: hangi dilde / aksanda seslendirileceğini belirle
    utterance.lang = targetLang.value;

    // speak: oluşturulan utterance nesnesini seslendirmeyi başlatır
    window.speechSynthesis.speak(utterance);
  };

  return (
    <div className="flex gap-4 mt-6 lg:gap-8 flex-col lg:flex-row">
      {/* Çevrilecek Metin */}
      <div className="flex-1">
        <div className="flex items-center justify-between mb-2">
          <label htmlFor="text" className="text-sm text-zinc-300">
            Çevrilecek Metin
          </label>

          <div className="flex items-center gap-3">
            <button className="btn" onClick={handleSpeakSource}>
              <Volume2 className="size-4" /> Seslendir
            </button>
            <button className="btn" onClick={() => dispatch(clear())}>
              Temizle
            </button>
          </div>
        </div>

        <div>
          <textarea
            id="text"
            maxLength={500}
            placeholder="Çevirmek istediğiniz metni buraya yazınız"
            value={textToTranslate}
            onChange={(e) => dispatch(setText(e.target.value))}
          ></textarea>
        </div>
      </div>

      <div className="grid place-items-center">
        <div className="size-8 lg:size-12 bg-blue-600 rounded-full grid place-items-center">
          <ArrowRight className="size-4 lg:size-5 max-lg:rotate-90" />
        </div>
      </div>

      {/* Çeviri Sonucu */}
      <div className="flex-1">
        <div className="flex items-center justify-between mb-2">
          <label htmlFor="answer" className="text-sm text-zinc-300">
            Çeviri Sonucu
          </label>

          <div className="flex items-center gap-3">
            <button className="btn" onClick={handleSpeakTarget}>
              <Volume2 className="size-4" /> Seslendir
            </button>
            <button
              className="btn"
              onClick={() => {
                // çeviri sonucunu kopyalar
                window.navigator.clipboard.writeText(translatedText);
              }}
            >
              Kopyala
            </button>
          </div>
        </div>

        <div className="relative">
          <textarea id="answer" disabled value={translatedText}></textarea>
          {loading && <Loader />}
        </div>
      </div>
    </div>
  );
};

export default TextContainer;
