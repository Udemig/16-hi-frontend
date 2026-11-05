import { useState, useMemo, useRef } from "react";
import Error from "../components/error";
import CoinCard from "../components/home/CoinCard";
import InfoList from "../components/home/InfoList";
import RefreshButton from "../components/home/RefreshButton";
import RefreshInfo from "../components/home/RefreshInfo";
import Searchbar from "../components/home/Searchbar";
import Loader from "../components/loader";
import useCoins from "../hooks/useCoins";
import { ArrowUp } from "lucide-react";
import HomeLoader from "./../components/loader/HomeLoader";

const Home = () => {
  // api'dan verileri getiren hook
  const { isLoading, error, data, lastUpdated, fetchData } = useCoins(
    "/coins/markets?vs_currency=usd",
  );

  // arama terimi
  const [searchTerm, setSearchTerm] = useState("");
  const query = searchTerm.trim().toLowerCase();

  // üstteki elemanın referansı
  const topRef = useRef(null);

  // aratılan terime göre
  const filtredCoins = useMemo(
    () =>
      data?.filter(
        (coin) => coin.name.toLowerCase().includes(query) || coin.symbol.includes(query),
      ),
    [data, query],
  );

  const isPending = isLoading && data?.length === 0;

  const isError = error && data?.length === 0;

  return (
    <div>
      <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
        {/* Başlık */}
        <div ref={topRef}>
          <h1 className="text-3xl font-bold text-gray-900 dark:text-white">Kripto Para Piyasası</h1>
          <p className="text-gray-600 dark:text-gray-400">En popüler kripto para birimleri</p>
        </div>

        {/* Filtreleme */}
        <div className="flex items-center gap-5">
          <Searchbar setSearchTerm={setSearchTerm} />
          <RefreshButton isLoading={isLoading} requestCoins={fetchData} />
        </div>
      </div>

      <InfoList coinCount={data?.length} lastUpdated={lastUpdated} />

      <div className="my-6 grid gap-6  md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
        {true ? (
          <HomeLoader />
        ) : isError ? (
          <Error message={error} refetch={fetchData} />
        ) : (
          filtredCoins?.map((coin) => <CoinCard key={coin.id} coin={coin} />)
        )}
      </div>

      <div className="flex justify-end mt-4">
        <button
          onClick={() => topRef.current.scrollIntoView({ behavior: "smooth" })}
          className="bg-blue-500 flex gap-1 items-center px-4 py-2 rounded-md"
          aria-label="Sayfanın en üstüne dön"
        >
          <ArrowUp className="size-4" />
          Başa Dön
        </button>
      </div>

      <RefreshInfo isLoading={isLoading} />
    </div>
  );
};

export default Home;
