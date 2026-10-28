// oxlint-disable react/set-state-in-effect
import { useEffect, useState } from "react";
import api from "../utils/api";

// verilen url ve parametrelerle api'dan veri çeken genel hook
const useFetch = (url) => {
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);
  const [data, setData] = useState(null);

  useEffect(() => {
    setIsLoading(true);
    setError(null);

    api
      .get(url)
      .then((res) => setData(res.data))
      .catch((err) => setError(err.message))
      .finally(() => setIsLoading(false));
  }, [url]);

  return { isLoading, error, data };
};

export default useFetch;
