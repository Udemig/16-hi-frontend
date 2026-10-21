# useRef

- useRef'i JavaScript'teki `document.getElementById()` / `querySelector()` gibi düşünebilirsiniz: bir HTML elementini "yakalayıp" üzerinde işlem yapmamızı sağlar.

```jsx
const inputRef = useRef(null);

<input ref={inputRef} />
<button onClick={() => inputRef.current.focus()}>Odakla</button>
```

- useRef'in 2 kullanım alanı vardır:

1. DOM elementlerine erişmek (yukarıdaki örnek)
2. Değer saklamak: useState'e benzer ama değer değişince ekran **yenilenmez**. Ekranda göstermeyeceğimiz, arka planda tutacağımız değerler için kullanılır.

# Wrapper (Sarmalayıcı) Component

- Wrapper component'i bir **resim çerçevesi** gibi düşünebilirsiniz: çerçeve hep aynıdır, içine koyduğunuz resim değişir.
- HTML'de `<div>` içine istediğimiz etiketleri yazabiliyorduk. Kendi yazdığımız bileşenleri de aynı şekilde kullanabiliriz:

```jsx
<Card />

<Card>
  <h2>Başlık</h2>
  <p>Açıklama</p>
</Card>
```

## children nedir?

- Açılış ve kapanış etiketleri arasına yazdığımız her şey, bileşene **`children`** adında bir prop olarak gider.
- Bileşen içinde `{children}` yazdığımız yere bu içerik yerleşir.

```jsx
function Card({ children }) {
  return (
    <div className="card">
      {children} {/* araya yazılan içerik buraya gelir */}
    </div>
  );
}
```

## Neden kullanılır?

- Ortak tasarımı **bir kere** yazıp içeriği her seferinde **farklı** doldurmak için → kod tekrarı azalır
- Örnek: Sitedeki tüm kartların kenarlığı, gölgesi, boşluğu aynı ama içerikleri farklı.

```jsx
<Card>
  <h2>Ürün</h2>
  <p>Fiyat: 100₺</p>
</Card>

<Card>
  <h2>Kullanıcı</h2>
  <img src="avatar.png" />
</Card>
```

## Sık kullanılan wrapper örnekleri

- `Card` → kart görünümü
- `Modal` → açılır pencere
- `Layout` → her sayfada aynı kalan Header + Footer, ortası değişir
- `Form`-> form alanları

# Higher Order Components (HOC) – Üst Düzey Bileşen

- HOC'u bir **telefon kılıfı** gibi düşünebilirsiniz: telefonun kendisini değiştirmez, üzerine yeni özellikler ekler (darbe koruması, cüzdan vb.).
- Aynı şekilde HOC da bir bileşeni alır, ona ekstra özellik ekler ve **yeni bir bileşen** olarak geri verir.
- Yani HOC aslında bir **fonksiyondur**: parametre olarak bileşen alır, geriye bileşen döndürür.

```
bileşen  ➜  HOC(bileşen)  ➜  yeni, geliştirilmiş bileşen
```

## Neden kullanılır?

- Birçok bileşende **aynı kontrolü / aynı mantığı** tekrar tekrar yazmamak için
- Örnek: Profil, Ayarlar ve Siparişler sayfası sadece giriş yapan kullanıcıya görünsün. Her sayfaya ayrı ayrı kontrol yazmak yerine bir kere HOC yazarız.

```jsx
// Normal bileşenler
function Profil() {
  return <h1>Profil Sayfası</h1>;
}

function Ayarlar() {
  return <h1>Ayarlar Sayfası</h1>;
}

// HOC: bir bileşen alıyor, yeni bir bileşen döndürüyor
function withAuth(Component) {
  return function (props) {
    const girisYapildi = false;

    if (!girisYapildi) {
      return <p>Bu sayfayı görmek için giriş yapmalısınız</p>;
    }

    return <Component {...props} />;
  };
}

// HOC ile "kılıf geçiriyoruz"
const KorumaliProfil = withAuth(Profil);
const KorumaliAyarlar = withAuth(Ayarlar);

// Kullanım
<KorumaliProfil />;
```

## Akılda kalacaklar

- HOC bir **fonksiyondur**, JSX etiketi gibi `<withAuth>` şeklinde kullanılmaz
- İsmi genelde `with` ile başlar: `withAuth`, `withLoading`
- `{...props}`: dışarıdan gelen propları içteki bileşene aynen aktarır (kılıf, telefonun tuşlarını kapatmasın diye 🙂)
- `children` ile karıştırmayın:
  - `children` → bileşenin **içine** içerik koyarız: `<Card>...</Card>`
  - HOC → bileşeni bir fonksiyona **verip** geliştirilmiş halini alırız: `withAuth(Profil)`

# QUIZ:

https://gemini.google.com/share/8bc501bdc54a?social_preview=false&skid=7d8dcc54-097b-4c2a-920c-84fe71e7c771
