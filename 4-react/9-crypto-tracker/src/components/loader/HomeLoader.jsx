const HomeLoader = () => {
  return [...new Array(100)].map((item, key) => (
    <div className="bg-zinc-100/10 dark:bg-gray-800 rounded-lg shadow-md hover:shadow-lg p-6 hover:scale-105 transition animate-pulse">
      {/* üst kısım */}
      <div className="flex items-center gap-3 mb-4">
        <div className="relative">
          <div className="size-12 rounded-full bg-zinc-500" />
          <span className="absolute -top-2 -right-2 bg-blue-700 size-6 text-xs grid place-items-center font-bold rounded-full border-2 dark:border-gray-800 text-white"></span>
        </div>

        <div>
          <h1 className="font-bold text-lg text-gray-900 dark:text-white uppercase"></h1>
          <p className="text-sm text-gray-600 dark:text-gray-400 max-w-40 truncate"></p>
        </div>
      </div>

      {/* orta kısım */}
      <div className="space-y-3">
        <div className="flex justify-between">
          <span className="card-label">Fiyat</span>
          <span className="card-value text-xl font-bold"></span>
        </div>
        <div className="flex justify-between">
          <span className="card-label">24s Değişim (%)</span>
          <span className={` card-value text-xl font-semibold flex items-center gap-1`}></span>
        </div>
        <div className="flex justify-between">
          <span className="card-label">Market Hacmi</span>
          <span className="card-value"></span>
        </div>
        <div className="flex justify-between">
          <span className="card-label">Fiyat</span>
          <span className="card-value"></span>
        </div>
      </div>

      {/* alt kısım */}
      <div className="mt-4 pt-4 border-t border-gray-200 dark:border-gray-700 flex justify-end text-gray-500 dark:text-gray-400">
        <span></span>
      </div>
    </div>
  ));
};

export default HomeLoader;
