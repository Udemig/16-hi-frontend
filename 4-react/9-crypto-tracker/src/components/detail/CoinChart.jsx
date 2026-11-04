import { Calendar } from "lucide-react";
import { useState } from "react";
import useCoins from "../../hooks/useCoins";
import ChartLoader from "../loader/ChartLoader";
import PriceChart from "./PriceChart";

const CoinChart = ({ id }) => {
  // seçili zaman aralığı (gün)
  const [period, setPeriod] = useState(7);

  // api'dan veriyi al
  const { isLoading, error, data, fetchData } = useCoins(
    `/coins/${id}/market_chart?vs_currency=usd&days=${period}`,
  );

  const periodOptions = [
    { day: 1, label: "1G" },
    { day: 7, label: "7G" },
    { day: 30, label: "1A" },
    { day: 365, label: "1Y" },
  ];

  console.log(data);

  return (
    <div className="box">
      {/* Gün Seçme */}
      <div className="flex items-center justify-between mb-6">
        <div className="flex items-center gap-3">
          <Calendar className="size-5 text-gray-600 dark:text-gray-400" />
          <h2 className="text-lg font-semibold text-gray-900 dark:text-white">Fiyat Geçmişi</h2>
        </div>

        <div className="flex gap-2">
          {periodOptions.map(({ day, label }) => (
            <button
              onClick={() => setPeriod(day)}
              className={`px-3 py-1 text-sm rounded-md ${period === day ? "bg-blue-500 text-white" : "bg-gray-200 dark:bg-gray-700 text-gray-700 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-600"}`}
            >
              {label}
            </button>
          ))}
        </div>
      </div>

      {/* Fiyat Grafiği */}
      {isLoading ? (
        <ChartLoader />
      ) : error ? (
        <p className="h-80 flex items-center justify-center w-full text-red-700">
          Üzgünüz bir sorun oluştu
        </p>
      ) : (
        <PriceChart priceHistory={data.prices} days={period} />
      )}
    </div>
  );
};

export default CoinChart;
