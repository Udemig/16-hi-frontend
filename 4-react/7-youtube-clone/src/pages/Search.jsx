import { useEffect, useState } from "react";
import { useSearchParams } from "react-router-dom";
import api from "./../utils/api";
import AsyncContent from "./../components/AsyncContent";
import ShortsListing from "./../components/ShortsListing";
import Card from "../components/Card";
import Spinner from "../components/Spinner";

const Search = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [isMoreLoading, setIsMoreLoading] = useState(false);
  const [error, setError] = useState(null);
  const [items, setItems] = useState([]);
  const [token, setToken] = useState(null);

  // url'den aratılan kelimye eriş
  const [searchParams] = useSearchParams();
  const query = searchParams.get("search_query");

  // bileşen ekrana basılınca api'dan aratılan kelimeye uygun sonuçları al
  useEffect(() => {
    setIsLoading(true);
    setError(null);

    api
      .get("/search", { params: { query } })
      .then((res) => {
        setItems(res.data.data);
        setToken(res.data.continuation);
      })
      .catch((err) => setError(err.message))
      .finally(() => setIsLoading(false));
  }, [query]);

  // videoların devamını almak için api isteği at
  const handleLoadMore = () => {
    setIsMoreLoading(true);

    api
      .get("/search", { params: { query, token } })
      .then((res) => {
        setItems((prev) => [...prev, ...res.data.data]);
        setToken(res.data.continuation);
      })
      .catch((err) => setError(err.message))
      .finally(() => setIsMoreLoading(false));
  };

  // ihtiyacımız olan öğeleri fitlrele
  const filtred = items.filter(
    (item) => item.type === "video" || item.type === "shorts" || item.type === "shorts_listing",
  );

  return (
    <div className="page pb-10">
      <h2 className="text-2xl mb-4">
        <b>{query}</b> için sonuçlar
      </h2>

      <AsyncContent isLoading={isLoading} error={error}>
        <div className="flex flex-col gap-4">
          {filtred.map((item, key) =>
            item.type === "shorts_listing" ? (
              <ShortsListing data={item.data} key={key} />
            ) : (
              <Card video={item} key={key} isRow />
            ),
          )}
        </div>

        {isMoreLoading && <Spinner />}

        {token && !isMoreLoading && (
          <div className="flex justify-center">
            <button
              onClick={handleLoadMore}
              className="my-10 bg-zinc-800 py-2 px-5 rounded-md hover:bg-zinc-700"
            >
              Daha Fazla
            </button>
          </div>
        )}
      </AsyncContent>
    </div>
  );
};

export default Search;
