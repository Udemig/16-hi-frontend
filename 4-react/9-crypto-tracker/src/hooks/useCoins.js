import { useEffect, useState } from "react";
import api from "../utils/api";

const useCoins = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(false);
  const [coins, setCoins] = useState([]);
  const [lastUpdated, setLastUpdated] = useState(new Date());

  useEffect(() => {
    api
      .get("/coins/markets?vs_currency=usd")
      .then((res) => {
        setCoins(res.data);
        setLastUpdated(new Date());
      })
      .catch((err) => setError(err.message))
      .finally(() => setIsLoading(false));
  }, []);


  return {isLoading,error,coins,lastUpdated}
}

export default useCoins