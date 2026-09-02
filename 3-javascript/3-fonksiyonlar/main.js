/*
 ! 7) Fonksiyon Nedir ? 
 * Fonksiyon, belirli bir görevi yerine getirmek için oluştuduğumuz tekrar kullanılabilir kod bloğudur.

 ! 7.1) Fonksiyonları Nasıl Kullanırız
 * a) function isim(){ çalışacak kod } formatında fonksiyon tanımlanır
 * b) isim() formatında fonksiyon çalıştırılır
*/

// Fonksiyon olmadan aynı kod bloğunu tekrar tekrar kullanırsak aşağıdaki gibi bir görüntü oluşur
console.log("Merhaba");
console.log("Tekrar Hoşgeldiniz");
console.log("Bugünkü hedefiniz nedir?");

console.log("Merhaba");
console.log("Tekrar Hoşgeldiniz");
console.log("Bugünkü hedefiniz nedir?");

console.log("Merhaba");
console.log("Tekrar Hoşgeldiniz");
console.log("Bugünkü hedefiniz nedir?");

console.log("Merhaba");
console.log("Tekrar Hoşgeldiniz");
console.log("Bugünkü hedefiniz nedir?");

console.log("Merhaba");
console.log("Tekrar Hoşgeldiniz");
console.log("Bugünkü hedefiniz nedir?");

// Fonksiyon yazarak bu durumlarda kod tekrarı önlenir
// fonksiyon tanımı (declaration)
function selamla() {
  console.log("Merhaba2");
  console.log("Tekrar Hoşgeldiniz2");
  console.log("Bugünkü hedefiniz nedir?2");
}

// fonksiyonu çalıştırma (call, invacation)
selamla();
selamla();
selamla();
selamla();

/*
 ! 7.2) Fonksiyonları Neden Kullanıyoruz
 * Tekrar eden kodları azaltmak
 * Kodları daha düzenli hale getirmek
 * Büyük problemleri küçük parçalara bölmek
 * Aynı işlemi farklı verilerle tekrar kullanmak
 * Kodun okunabilirliğini artırmak
 * Kodun bakımını kolaylaştırmak
 
 ! 7.3) Fonksiyonlarda Parametre
 * Fonksiyonların her zaman aynı veriyle çalışmasını istemeyiz.
 * Parametreler fonksiyonların yeniden kullanılablir olmasını sağlar.
 * Parametre isimlendirme kuralları değişkenlerle aynıdır
 * Parametreye değer gönderme işlemini fonksiyonu çağırıken yaparız (Argument).
 * Argüman tanımlarken parametrelerin tanımlandığı sıraya göre tanımlanır.
*/

function kdvHesapla(fiyat, kdvOrani) {
  const kdv = fiyat * kdvOrani;

  console.log("KDV: ", kdv);
}

kdvHesapla(100, 0.2); // 20
kdvHesapla(200, 0.4); // 80
kdvHesapla(7890, 0.25); // 1972.5

/*
 ! 7.4) return Nedir?
 * Bazı fonksiyonların yalnızca bir şey yapmasını değil, bir sonuç üretmesini isteriz
 * Ve üretin bu sonucu farklı yerlerde kullanmak istiyorsak o sonucu return ederiz
 * Yani, return değer döndürür.
*/

function topla(a, b) {
  const toplam = a + b;

  return toplam;
}

// return edilen değere fonkiyonu çağırdığımız yerde erişebiliriz ve o değeri tekrar kullanabiliriz
const toplam1 = topla(80, 70);
const toplam2 = topla(90, 20);
const toplam3 = topla(toplam1, toplam2);

console.log(toplam3);

//! 7.5) return ile durdurma
// returnun bir diğer görevi ise çalıştığı anda fonksiyonu sona erdirir

function test() {
  console.log("Birinci log");
  return;
  console.log("İkinci log");
}

test();

//! 7.6) default parameter
// Bazen parametrelere değer gönderilmediğinde bozuk çıktı üretmemesi için varsayılan parametre kullanırız
// Varsayılan parametreler sadece parametreye değer gönderilmediğinde devreye girer

function selamVer(isim = "Dünya") {
  console.log("Merhaba, " + isim);
}

selamVer("Furkan");
selamVer();

//! 7.7) Örnek-1
function kargoHesapla(kilo, hizli = false) {
  let bazFiyat = 175;
  let toplamFiyat = bazFiyat + kilo * 20;

  if (hizli) {
    toplamFiyat += 125;
  }

  return toplamFiyat;
}

const kargorÜcreti1 = kargoHesapla(5);
console.log(kargorÜcreti1); // 275

const kargorÜcreti2 = kargoHesapla(5, true);
console.log(kargorÜcreti2); // 400

//! 7.8) Örnek-2
function sifreKontrol(sifre) {
  if (sifre.length < 6) {
    return "Şifre çok kısa!";
  }

  return "Şifre geçerli.";
}

console.log(sifreKontrol("selam"));
console.log(sifreKontrol("Merhaba789"));

//! 7.9) Function Tanımlama Yöntemleri
// Fonksiyon oluşturmanın farklı yolları bulunuyor

//? A) Function Decleration
function selamla1() {
  console.log("Merhaba Dünya1");
}
selamla1();

//? B) Function Expression
const selamla2 = function () {
  console.log("Merhaba Dünya2");
};
selamla2();

// Hoisting: Javascript'in kodu çalıştırmadan önce bazı değişken ve foknksiyon tanımları kodda yukarı taşıması / belleğe almasıdır

//? C) Anonymous Function
// İsmi olmayan fonksiyonlardır
// Yukarıdaki expression örneğindeki = den sonra yer alan fonksiyondur

//? D) Arrow Function
// Modern javascript'de en çok kullanılan fonksiyon yazım şeklidir
function topla1(a, b) {
  return a + b;
}

const topla2 = (a, b) => {
  return a + b;
};

//? E) One Line Function
// Oktan sonra süslü parantez koyulmazsa okun devamına yazılan değişken return edilir
const topla3 = (a, b) => a + b;
topla3();

//? F) Immediate Call Function
// Bir fonksiyonu kod içerinde tekrar tekrar kullanmayacaksanız sadece 1 kez kullanıcaksanız tercih edilir
(() => {
  console.log("Immediate call");
})();

//! 8) Scope Kavramı
// Bir değişkene kodun hangi bölümünden erişebildiğimiz belirleyen kapsamdır

//? A) Local Variable
// {} içerisinde tanımlanan değişkenler sadece o {} içerisinde doğrudan erişelebilir
let firstName = "Furkan";

function test2() {
  const message = "Merhaba";
  console.log("Fonksiyon içinde " + message + firstName);

  if (true) {
    const x = "denemee";
    console.log("İf içerisinde: " + message + firstName);
  }
}

if (false) {
  const mesaj = "selam";
  console.log(mesaj + firstName);
}

//? B) Global Variable
// En üst düzeyde tanımlanan bileşenler kodun her yerinden erişebilir
// Sadece gerek duyudluğunda kodun büyük bölümünde ihtiyaç duyulan değişkenlerde kullanılması gerekir.
// let firstName = "Furkan";

//! Örnek:  Fonksiyon + Koşul + Dizi + Döngü
// Bir sınıftaki öğrencilerin not verileri notlar dizisi içerisinde yer alır. Bu sınıftaki kaç öğrencinin dersten geçtiğini hesaplayan bir fonksiyon yazınız.
function kacKisiGecti(notlar) {
  let gecenKisiSayisi = 0;

  for (not of notlar) {
    if (not >= 50) {
      gecenKisiSayisi++;
    }
  }

  return gecenKisiSayisi;
}

const notlar = [40, 75, 90, 30, 65, 20, 100, 48, 83, 14, 50];

const sonuc = kacKisiGecti(notlar);
console.log("Fonksiyon sonucu: ", sonuc);

/*
### 🟢 Başlangıç

1. **Tek mi Çift mi?**
   Bir sayı alan ve sayının tek mi çift mi olduğunu döndüren bir fonksiyon yazınız.

2. **Büyük Olanı Bulma**
   İki sayı alan ve büyük olan sayıyı döndüren bir fonksiyon yazınız.

3. **Faktöriyel Hesaplama**
   Bir sayı alan ve sayının faktöriyelini hesaplayan bir fonksiyon yazınız.

4. **Rakamlar Toplamı**
   Bir sayı alan ve sayının rakamları toplamını döndüren bir fonksiyon yazınız.
   `12345 → 15`

---

### 🟡 Orta

5. **Not Durumu**
   Bir öğrencinin notunu alan fonksiyon, öğrenci geçtiyse `"Geçti"`, kaldıysa `"Kaldı"` döndürsün.

6. **Kelimeyi Ters Çevirme**
   Bir kelime alan ve kelimeyi tersten döndüren bir fonksiyon yazınız.
   `"merhaba" → "abahrem"`

7. **Palindrom Kontrolü**
   Bir kelime alan ve kelimenin tersten okunduğunda da aynı olup olmadığını kontrol eden fonksiyon yazınız.
   `"kabak" → true`

8. **Asal Sayı Kontrolü**
   Bir sayı alan ve sayının asal olup olmadığını `true/false` olarak döndüren fonksiyon yazınız.

---

### 🟠 İyi Algoritma Soruları

9. **Sınıf Başarı Durumu**
   Öğrencilerin notlarını içeren bir dizi veriliyor. Fonksiyon sınıfın ortalamasını hesaplasın ve ortalama 50 veya üzerindeyse `"Başarılı"`, değilse `"Başarısız"` döndürsün.

10. **ATM Para Çekme**
    Bakiye ve çekilecek para miktarını alan bir fonksiyon yazınız.

    * Bakiye yeterliyse yeni bakiyeyi döndürsün.
    * Yetersizse `"Yetersiz bakiye"` döndürsün.
    * Miktar 0 veya negatifse `"Geçersiz miktar"` döndürsün.

11. **Eksik Sayıyı Bulma**
    `1` ile `10` arasındaki sayılardan biri eksik olacak şekilde bir dizi veriliyor. Eksik sayıyı bulan fonksiyon yazınız.

    `[1, 2, 3, 4, 5, 7, 8, 9, 10]`
    → `6`

12. **En Büyük İkinci Sayı**
    Bir sayı dizisindeki en büyük ikinci sayıyı bulan bir fonksiyon yazınız.

---

### 🔴 Daha Zor

13. **Sıralama Algoritması**
    Bir sayı dizisini **`sort()` kullanmadan** küçükten büyüğe sıralayan bir fonksiyon yazınız.

14. **Kelime Frekansı**
    Bir cümlede belirli bir kelimenin kaç kez geçtiğini bulan fonksiyon yazınız.

    `"ali eve geldi ali yemek yedi"`
    `"ali"` → `2`

15. **İki Dizinin Ortak Elemanları**
    İki sayı dizisi alan ve iki dizide de bulunan sayıları bulan bir fonksiyon yazınız.
    **`includes()` gibi dizi metotları kullanmayınız.**

16. **En Yakın Sayıyı Bulma**
    Bir sayı dizisi ve hedef sayı alan fonksiyon, hedefe matematiksel olarak en yakın sayıyı bulsun.

    `[10, 25, 40, 60]`
    hedef: `32`
    → `25`

---

### 🔥 Son Seviye

17. **Fibonacci Dizisi**
    `n` sayısını alan ve Fibonacci dizisinin ilk `n` elemanını oluşturan fonksiyon yazınız.

    `5 → 0, 1, 1, 2, 3`

18. **İki Sayı Arasındaki Asallar**
    Başlangıç ve bitiş sayısı alan fonksiyon, aralarındaki asal sayıları bulup yeni bir diziye eklesin.

    `10, 20 → [11, 13, 17, 19]`

19. **Para Üstü Hesaplama**
    Ürün fiyatı ve verilen para miktarını alan fonksiyon, para üstünü **en az sayıda banknot/bozuk para** kullanarak hesaplasın.

    Örneğin:
    `fiyat = 376`
    `verilen = 500`
    → `124 TL`
    → `100 + 20 + 2 + 2`

20. **Sayı Tahmin Algoritması**
    Bir hedef sayı ve kullanıcının tahmini alan fonksiyon yazınız.

    * Tahmin küçükse → `"Daha büyük bir sayı dene"`
    * Tahmin büyükse → `"Daha küçük bir sayı dene"`
    * Eşitse → `"Bildin!"`

Bence **öğrenciye sırayla 1 → 4 → 6 → 8 → 10 → 11 → 13 → 16 → 18 → 19** şeklinde verirsen, basitten başlayıp gerçekten algoritma kurmaya doğru güzel bir zorluk artışı olur.

*/
