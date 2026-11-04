import { useParams } from "react-router-dom";
import useCoins from "../hooks/useCoins";
import Loader from "./../components/loader";
import Error from "./../components/error";
import CoinHeader from "../components/detail/CoinHeader";
import CoinPrice from "../components/detail/CoinPrice";
import CoinChart from "../components/detail/CoinChart";
import CoinStats from "../components/detail/CoinStats";
import CoinDescription from "../components/detail/CoinDescription";

const Detail = () => {
  // urldeki id parametresine eriş
  const { id } = useParams();

  // coin detay verilerini al
  const { isLoading, error, data, fetchData } = useCoins(`/coins/${id}`);

  if (isLoading && !data) return <Loader />;

  if (error && !data) return <Error message={error} refetch={fetchData} />;

  return (
    <div className="space-y-6">
      <CoinHeader coin={data} isLoading={isLoading} refetch={fetchData} />
      <CoinPrice coin={data} />
      <CoinChart id={data.id} />
      <CoinStats coin={data} />
      <CoinDescription description={data.description.en} />
    </div>
  );
};

export default Detail;
