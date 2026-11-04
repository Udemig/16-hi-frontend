import { useEffect, useState } from "react";
import api from "../utils/api";

const useCoins = (url) => {
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(false);
  const [data, setData] = useState(null);
  const [lastUpdated, setLastUpdated] = useState(new Date());

  // isteği atar ve state'i günceller
  const fetchData = () => {
    setIsLoading(true);
    setError(null);

     api
      .get(url)
      .then((res) => {
        setData(res.data);
        setLastUpdated(new Date());
      })
      .catch((err) => setError(err.message))
      .finally(() => setIsLoading(false));
  }

  useEffect(() => {
    fetchData()
  }, [url]);

  return {isLoading,error,data,lastUpdated, fetchData}
}

export default useCoins