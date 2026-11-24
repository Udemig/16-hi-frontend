const Error = ({ message, retry }) => {
  return (
    <div className="flex flex-1 flex-col items-center justify-center gap-4 text-center">
      <b className="text-lg">Uçuş Verisi Alınamadı</b>
      <p className="text-sm text-white/70">{message}</p>

      {retry && (
        <button onClick={retry} className="px-4 py-1.5 rounded-lg bg-primary font-semibold">
          Tekrar Dene
        </button>
      )}
    </div>
  );
};

export default Error;
