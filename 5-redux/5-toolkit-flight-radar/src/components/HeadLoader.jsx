const HeadLoader = () => {
  return (
    <div className="flex items-center gap-2">
      <h3 title="Çağrı İşareti" className="h-7 w-24 bg-black/30 rounded-lg animate-pulse"></h3>
      <span title="Uçuş Numarası" className="badge h-7 w-12 animate-pulse"></span>
      <span title="Uçak Tip Kodu" className="badge h-7 w-12 animate-pulse"></span>
    </div>
  );
};

export default HeadLoader;
