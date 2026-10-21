const KullaniciListesi = ({ yukleniyorMu, hata }) => {
  return (
    <div>
      <h1>Kullanıcı Listesi</h1>
    </div>
  );
};

const UrunListesi = ({ yukleniyorMu, hata }) => {
  return (
    <div>
      <h1>Ürün Listesi</h1>
    </div>
  );
};

// HOC: Bileşeni alıyor, "yüklenme" ve "hata" koşullarını bileşen ekleyip döndürücek
const withLoading = (Component) => {
  return ({ yukleniyorMu, hata, ...props }) => {
    if (yukleniyorMu) return <p>Yükleniyor....</p>;

    if (hata)
      return (
        <div>
          <h1>Hata!</h1>
          <p>{hata}</p>
          <button>Tekrar Dene</button>
        </div>
      );

    return <Component {...props} />;
  };
};

// Bileşenleri koşulları yükle
export const KullaniciListesiYuklenmeli = withLoading(KullaniciListesi);
export const UrunListesiYuklenmeli = withLoading(UrunListesi);
