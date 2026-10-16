import { useState, useEffect } from "react";

const Countdown = () => {
  const [count, setCount] = useState(10);

  // bileşen ekrana basılınca sayacı başlat
  useEffect(() => {
    // her saniye sayaç değerini 1 azalt
    const id = setInterval(() => setCount((prev) => prev - 1), 1000);

    // bileşenin ekrandan ayrılma anında sayacı iptal et
    return () => clearInterval(id);
  }, []);

  return (
    <div>
      <h1>Geri Sayım</h1>

      <h1>{count}</h1>
    </div>
  );
};

export default Countdown;
