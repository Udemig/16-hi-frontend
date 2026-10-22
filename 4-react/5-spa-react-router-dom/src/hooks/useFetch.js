import { useEffect, useState } from "react";
import api from "../api";
import { useNavigate } from "react-router-dom";

const useFetch = (url, searchTerm) => {
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);
  const [data, setData] = useState(null);

  const navigate = useNavigate();

  useEffect(() => {
    if (!data) setIsLoading(true);

    api
      .get(url, { params: { q: searchTerm } })
      .then((res) => setData(res.data))
      .catch((err) => {
        setError(err.message);

        if (err.status === 404) {
          navigate("/not-found", { state: err.message });
          return;
        }
      })
      .finally(() => setIsLoading(false));
  }, [url, searchTerm]);

  return { isLoading, error, data };
};

export default useFetch;
