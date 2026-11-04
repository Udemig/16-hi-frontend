import { RefreshCw } from "lucide-react";

const RefreshButton = ({ isLoading, requestCoins }) => {
  return (
    <button
      disabled={isLoading}
      onClick={requestCoins}
      className="p-3 bg-blue-600 rounded-lg text-white"
    >
      <RefreshCw className={isLoading ? "animate-spin" : ""} />
    </button>
  );
};

export default RefreshButton;
