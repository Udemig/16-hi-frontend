import Error from "../components/error";
import CoinCard from "../components/home/CoinCard";
import InfoList from "../components/home/InfoList";
import RefreshButton from "../components/home/RefreshButton";
import Searchbar from "../components/home/Searchbar";
import Loader from "../components/loader";
import useCoins from "../hooks/useCoins";

const Home = () => {
  const { isLoading, error, coins, lastUpdated } = useCoins();

  if (isLoading) return <Loader />;

  if (error) return <Error message={error} />;

  return (
    <div>
      <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
        {/* Başlık */}
        <div>
          <h1 className="text-3xl font-bold text-gray-900 dark:text-white">Kripto Para Piyasası</h1>
          <p className="text-gray-600 dark:text-gray-400">En popüler kripto para birimleri</p>
        </div>

        {/* Filtreleme */}
        <div className="flex items-center gap-5">
          <Searchbar />
          <RefreshButton />
        </div>
      </div>

      <InfoList coinCount={coins.length} lastUpdated={lastUpdated} />

      <div className="my-6 grid gap-6  md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
        {coins.map((coin) => (
          <CoinCard key={coin.id} coin={coin} />
        ))}
      </div>
    </div>
  );
};

export default Home;
