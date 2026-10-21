import { useRef, useState } from "react";

const Timer = () => {
  const [seconds, setSeconds] = useState(0);
  const [isRunning, setIsRunning] = useState(false);
  const intervalRef = useRef(null);

  // sayacı başlat
  const startTimer = () => {
    setIsRunning(true);
    intervalRef.current = setInterval(() => setSeconds((prev) => prev + 1), 1000);
  };

  // sayacı durdur
  const stopTimer = () => {
    setIsRunning(false);
    clearInterval(intervalRef.current);
  };

  // sayacı sıfırla
  const clearTimer = () => {
    stopTimer();
    setSeconds(0);
  };

  return (
    <div>
      <h1>Örnek-4: Değer Tutma 2</h1>
      <p>
        <b>Açıklama</b> Kronometre
      </p>

      <h1>
        {Math.floor(seconds / 3600)
          .toString()
          .padStart(2, "0")}
        :
        {Math.floor(seconds / 60)
          .toString()
          .padStart(2, "0")}
        :{(seconds % 60).toString().padStart(2, "0")}
      </h1>

      <div>
        <button className="btn btn-primary" onClick={startTimer} disabled={isRunning}>
          Başlat
        </button>
        <button className="btn btn-danger mx-2" onClick={stopTimer} disabled={!isRunning}>
          Durdur
        </button>
        <button className="btn btn-warning" onClick={clearTimer}>
          Sıfırla
        </button>
      </div>
    </div>
  );
};

export default Timer;
