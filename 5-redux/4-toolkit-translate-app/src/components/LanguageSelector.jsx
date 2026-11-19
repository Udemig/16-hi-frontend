import { ArrowLeftRight } from "lucide-react";
import ReactSelect from "react-select";
import { SELECT_STYLES } from "../utils/constants";
import { useDispatch, useSelector } from "react-redux";
import { useMemo } from "react";
import { setSourceLang, setTargetLang, swap } from "../redux/slices/translateSlice";

const LanguageSelector = () => {
  const dispatch = useDispatch();

  // store'a abone ol
  const { loading, languages } = useSelector((store) => store.languageReducer);
  const { sourceLang, targetLang } = useSelector((store) => store.translateReducer);

  // storedaki languages dizisindeki nesnelerin keylerini güncelle
  // api'dan gelen: { "language": "it", "name": "Italian"}
  // react-select : { "value": "it",  "label": "Italian"}
  const options = useMemo(
    () =>
      languages
        .map((item) => ({ value: item.language, label: item.name }))
        .sort((a, b) => a.label.localeCompare(b.label)),
    [languages],
  );

  // dili algıla seçeneği
  const detect = { label: "Dili Algıla", value: undefined };

  return (
    <div className="space-y-4">
      <div className="flex items-center gap-3 flex-col lg:flex-row">
        {/* Kaynak Dil */}
        <div className="flex-1 w-full">
          <label className="text-sm text-zinc-300 mb-2 block" htmlFor="source">
            Kaynak Dil
          </label>

          <ReactSelect
            id="source"
            className="text-black"
            options={[detect, ...options]}
            value={sourceLang}
            styles={SELECT_STYLES}
            isLoading={loading}
            isDisabled={loading}
            onChange={(selected) => {
              // eğer seçilen dil hedef dilin aynısıysa değiştir
              if (selected.value === targetLang.value && sourceLang.label !== "Dili Algıla") {
                dispatch(swap());
              } else {
                dispatch(setSourceLang(selected));
              }
            }}
          />
        </div>

        {/* Değiştirme Butonu */}
        <div className="lg:self-end">
          <button
            disabled={sourceLang.label === "Dili Algıla"}
            onClick={() => dispatch(swap())}
            className="size-10 lg:size-12 bg-zinc-700 rounded-full grid place-items-center disabled:opacity-50"
          >
            <ArrowLeftRight className="size-4 lg:size-5 max-lg:rotate-90" />
          </button>
        </div>

        {/* Hedef Dil */}
        <div className="flex-1 w-full">
          <label className="text-sm text-zinc-300 mb-2 block" htmlFor="target">
            Hedef Dil
          </label>

          <ReactSelect
            id="target"
            className="text-black"
            options={options}
            styles={SELECT_STYLES}
            value={targetLang}
            isLoading={loading}
            isDisabled={loading}
            onChange={(selected) => {
              if (selected.value === sourceLang.value) {
                dispatch(swap());
              } else {
                dispatch(setTargetLang(selected));
              }
            }}
          />
        </div>
      </div>

      <div className="text-center">
        <p className="text-xs text-zinc-500">{languages.length} dil destekleniyor</p>
      </div>
    </div>
  );
};

export default LanguageSelector;
