import { useState, useEffect } from "react";
import axios from "axios";

// Custom Hook - Kendi Hook'umuzu Oluşturalım
// Bütün bileşenlerde kullanabileceğimiz api isteğinin state'ini yönetmedeki kod tekrarının önleyecek bir hook
// Bir custom hook içerisinde diğer hookları kullanabiliriz

const useFetch = (url) => {
  // hook içerisinde tutulan state'ler
  const [data, setData] = useState(null);
  const [error, setErrror] = useState(null);
  const [isLoading, setIsLoading] = useState(true);

  // hook'u kullandığımız sayfa ekrana basıldığında:
  useEffect(() => {
    setIsLoading(true);

    axios
      .get(url)
      .then((res) => setData(res.data))
      .catch((err) => setErrror(err.message))
      .finally(() => setIsLoading(false));
  }, [url]);

  // hook'U çağırdığımız bileşene döndüreceğimiz staet'ler
  return { isLoading, error, data };
};

export default useFetch;
