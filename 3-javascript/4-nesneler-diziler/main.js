/*
 ! 9) Object
 * Bir varlığa ait birden fazla özelliği anahtar-değer yapısında saklamamızı sağlar.
 * Nesne oluşturmak için {} kullanırız
 * Nesneler anahtar-değer çiftlerinden oluşur
 * Her anahtar-değer çifti nesnin bir özelliği (property) kabul edilir
*/

const urun = {
  isim: "Laptop",
  fiyat: 43200,
  stoktaVarMi: true,
  "id no": "84359436127343",
  kategori: "Bilgisayar",
};

//! 9.1) Dot Notation
// Nesne içerisindeki bir property'ye ulaşmanın en yaygın yoludur
document.write("<br>" + urun.isim);
document.write("<br>" + urun.fiyat);

//! 9.2) Bracket Notation
// Nesne içerisindeki değer [] ile erişme yöntemidir
document.write("<br>" + urun["isim"]);
document.write("<br>" + urun["fiyat"]);

//! 9.3) Bracket vs Dot
// a) Bracket notation özel karaktere sahip özelliklere erişebilirken dot notation erişemez
document.write("<br>" + urun["id no"]);

// b) Dinamik bir key'e bracket notation'la erişebilir ama dot ile olmaz
const erisilecek = "kategori";

document.write("<br>" + urun[erisilecek]);

//! 9.4) Property değerine değiştirme
// Nesne const ile tanımlansada özelliğinin değerini değiştirmede bir sorun yoktur

urun.isim = "Tablet";
console.log(urun);

//! 9.5) Yeni property ekleme
// Nesene oluşturulurken tanımlanmayan propertyler sonradan eklenebilir
urun.indirimOrani = 20;
console.log(urun);

//! 9.6) Property kaldırma
// Bir property silmek için `delete` kullanırız
delete urun.stoktaVarMi;
console.log(urun);

//! 9.7) Olmayan Property
// Değeri undefined geliri
console.log(urun.boyut);

//! 9.8) Object içerisinde veri türleri
// Nesne içerisinde her veri tipinden veri tanımlanabilir
const kullanici = {
  ad: "Ahmet",
  yas: 23,
  evliMi: true,
  address: {
    ulke: "Türkiye",
    sehir: "İzmir",
  },
  hobiler: ["Sörf", "Bisiklet", "F1"],

  //! 9.9) this
  // Bir method içerisinde aynı nesnenin özelliklerine ulaşmak için kullanılır
  tanit: function () {
    console.log("Selam, benim adım", this.ad);
  },
};

kullanici.tanit();

//! 9.10) Arrow VS Normal Method
// Normal fonksiyonların this'i vardır ama arrow function'ın kendi this'i yoktur
// Ok fonksiyonlar bulunduğu dışarıdaki scope'un this değerini kullanır

//! 9.11) for...in Döngüsü
// Nesne içerisindeki özellikeri dönmemizi sağlar
const telefon = {
  marka: "Apple",
  model: "Iphone 17",
  ekran: "Oled",
  depolama: 256,
  kamera: 128,
};

for (const anahtar in telefon) {
  document.write("<br>" + anahtar + ": " + telefon[anahtar]);
}

// for of
const sayilar = [1, 2, 3, 4, 5, 6];

for (const hobi of kullanici.hobiler) {
  document.write("<br>" + hobi);
}

//! 10) Dizi Methodları
//! 10.1) Dizi İçerisine Nesne

// Tek bir ürün için nesne kullanabiliriz
const product = {
  id: 1,
  name: "Laptop",
  price: 4500,
};

// Ama birden fazla ürünümüz varsa bunları dizi içerisinde tutarız
const products = [
  { id: 1, name: "Laptop", price: 45000 },
  { id: 2, name: "Tablet", price: 19900 },
  { id: 3, name: "Mouse", price: 2570 },
];

// Örnek Dizi
let ogrenciler = [
  "Atlas",
  "Faruk",
  "Aygul",
  "Burcu",
  "Derya",
  "Atlas",
  "Fatmanur",
  "Zeynep",
  "Meric",
  "Saadet",
  "Selim",
];

document.write("<br> ---------------");
document.write("<br> Öğrenciler: " + ogrenciler);
document.write("<br> ---------------");

//! 10.2) push()
// Dizinin sonuna yeni eleman ekler
// Orjinal diziyi günceller
ogrenciler.push("Ali");
document.write("<br> Push: " + ogrenciler);
document.write("<br> ---------------");

//! 10.3) unshift()
// Dizinin başına yeni eleman ekler
// Orjinal diziyi günceller
ogrenciler.unshift("Ayşe");
document.write("<br> Unshift: " + ogrenciler);
document.write("<br> ---------------");

//! 10.4) pop()
// Dizinin sonundaki elemanı kaldırır
// Orjinal diziyi günceller
// Kaldırdığı elemanı return eder
const kaldirilan1 = ogrenciler.pop();
document.write("<br> Pop: " + ogrenciler);
document.write("<br> Kaldırılan eleman: ", kaldirilan1);
document.write("<br> ---------------");

//! 10.4) shift()
// Dizinin başındaki elemanı kaldırır
// Orjinal diziyi günceller
// Kaldırdığı elemanı return eder
const kaldirilan2 = ogrenciler.shift();
document.write("<br> Shift: " + ogrenciler);
document.write("<br> Kaldırılan eleman: ", kaldirilan2);
document.write("<br> ---------------");

//! 10.5) includes()
// Bir değitin dizide bulunup bulunmadığını kontrol eder
// True yada False return eder
const selimVarMi = ogrenciler.includes("Selim");
const burakVarMi = ogrenciler.includes("Burak");

console.log(selimVarMi);
console.log(burakVarMi);

//! 10.6) indexOf()
// Bir elemanın hangi index'te bulunduğunu verir
// Index değerini return eder
// Eleman yoksa -1 return eder
// Birden fazla aynı eleman varsa ilkinin indexini getirir
const mericIndex = ogrenciler.indexOf("Meric");
const atlasIndex = ogrenciler.indexOf("Atlas");
const burakIndex = ogrenciler.indexOf("Burak");

document.write("<br> Meriç İndexi: " + mericIndex);
document.write("<br> Atlas İndexi: " + atlasIndex);
document.write("<br> Burak İndexi: " + burakIndex);
document.write("<br> ---------------");

//! 10.6) lastIndexOf()
// Birden fazla aynı eleman varsa sonucusunun indexini getirir
const atlasSonIndex = ogrenciler.lastIndexOf("Atlas");

document.write("<br> Atlas Son İndexi: " + atlasSonIndex);
document.write("<br> ---------------");

//! 10.7) slice()
// Dizinin belirli bir bölümünü alır
// Orjinal diziyi değiştirmez
// Başlangıç ve bitiş indexini parametre olarak alır
// Bitiş indexini yazmassak başlanıç index'inden sonuncu elemana kadar getirir
const sliceSonucu = ogrenciler.slice(3, 6);

document.write("<br> Orjinal dizi: " + ogrenciler);
document.write("<br> Slice Sonucu: " + sliceSonucu);
document.write("<br> ---------------");

//! 10.8) splice()
// İsviçre çakısı
// Dizi içerisinden eleman silebilir, değiştirebilir ve yeni eleman/elemanlar ekleyebilir
// Splice her zaman işlem yapılacak elemanın index'ini ister
// Orjinal diziyi günceller

// a) splice ile eleman kaldırma
const kaldirilan3 = ogrenciler.splice(4, 1);
document.write("<br> Splice: " + ogrenciler);
document.write("<br> Kaldirilan: " + kaldirilan3);
document.write("<br> ---------------");

// b) splice ile eleman değiştirme
ogrenciler.splice(6, 1, "Saadet_Najaf");
document.write("<br> Splice: " + ogrenciler);
document.write("<br> ---------------");

// c) splice ile eleman ekleme
ogrenciler.splice(5, 0, "Furkan", "Burak");
document.write("<br> Splice: " + ogrenciler);
document.write("<br> ---------------");

//! 10.9) join()
// Dizi elemanlarını string haline getirir
// Orjinal diziyi etkilemez

const stringOgrenciler = ogrenciler.join(" | ");

document.write("<br> join: " + stringOgrenciler);
document.write("<br> ---------------");

//! 10.10) concat()
// Birden fazla diziyi birleştirir
// Orjinal diziyi etkilemez
const yeniOgrenciler = ["Mahmut", "Kayra", "Esra"];

ogrenciler = ogrenciler.concat(yeniOgrenciler);

document.write("<br> concat: " + ogrenciler);
document.write("<br> ---------------");

//! 10.11) reverse()
// Dizinin sırasını tersine çevirir
// Orjinal diziyi günceller
ogrenciler.reverse();

document.write("<br> reverse: " + ogrenciler);
document.write("<br> ---------------");

//! 10.12) forEach()
// Dizinin her elemanı için bir fonksiyon çalıştırır
// forOf ile aynı işi yapar
// forEach'e verdiğimiz fonksiyon parametre olarak dizideki elemanı ve elemanın indexini alır

for (const ogrenci of ogrenciler) {
  console.log(ogrenci + " kişisine bildirim gönderildi - 1");
}

ogrenciler.forEach((ogrenci, index) => {
  console.log(ogrenci + " kişisine bildirim gönderildi: " + index);
});

//! 10.13) map()
// Dizinin her elemanı için bir fonksiyon çalıştırır ve yeni bir dizi oluşturur
// map fonksiyonunda bir şey return edilirse. Return edilen verilerden yeni bir dizi oluşur
// Orjinal diziyi etkilemez

const yeniDizi = ogrenciler.map((ogrenci, index) => {
  console.log(ogrenci + " kişiisine mail gönderildi " + index);

  return index + "-" + ogrenci;
});

console.log(ogrenciler);
console.log(yeniDizi);

//* Örnek: Ürün fiyatlarına %20 zam gelmiş hallerini hesapla
const urunFiyatlari = [999, 574, 8920, 5440, 3333];

const zamliFiyatlar = urunFiyatlari.map((fiyat) => fiyat + fiyat * 0.2);

console.log(zamliFiyatlar);

//! 10.14) filter()
// Belirli koşulu sağlayan elemanlardan yeni bir Array oluşturur
// Orjinal diziyi etkilemez
// Koşulu sağlayan eleman yoksa boş dizi döndürür
const numbers = [1025, 40, 14, 50, 60, 57, 89, 32, 12, 25];

const bigNumbers = numbers.filter((number) => number >= 50);

console.log(bigNumbers);

// Örnek:
const storeProducts = [
  {
    id: 4,
    name: "Laptop",
    price: 30000,
    category: "Electronic",
  },
  {
    id: 8,
    name: "Olta Takımı",
    price: 3450,
    category: "Hunting",
  },
  {
    id: 82,
    name: "Telefon",
    price: 25000,
    category: "Electronic",
  },
  {
    id: 14,
    name: "Yağmurluk",
    price: 1200,
    category: "Hunting",
  },
];

const huntProducts = storeProducts.filter((product) => product.category === "Hunting");

console.log(huntProducts);

//! 10.15) find()
// Koşulu sağlayan ilk elemanı bulur
// Genelde dizideki bir elemanı aramak için kullanırız
// Koşulu sağlayan eleman yoksa undefined döndürür

const found = storeProducts.find((product) => product.id === 4);

console.log(found);

//! 10.16) findIndex()
// Koşulu sağlayan ilk elemanın indexini bulur
// Genelde dizideki bir elemanın indexini öğrenmek için kullanırız
// Koşulu sağlayan eleman yoksa -1 döndürür

const foundIndex = storeProducts.findIndex((product) => product.id === 19);

console.log(foundIndex);

//! 10.17) some()
// Dizide en az bir elemanın koşulu sağlayıp sağlamadığını kontrol eder
// en az bir eleman koşulu sağlıyorsa true döner
// bütün elemanlar koşulu sağlamıyorsa false döner
const numbers2 = [10, 20, 30, 40, 50, 60, 70, 80, 90, 100];

const result1 = numbers2.some((number) => number > 50);
console.log(result1);

const result2 = numbers2.some((number) => number > 120);
console.log(result2);

// Örnek: Stok Kontrolü
const tshirt = [
  {
    color: "Green",
    size: "M",
    inStock: false,
  },
  {
    color: "black",
    size: "XL",
    inStock: false,
  },
  {
    color: "whie",
    size: "S",
    inStock: true,
  },
];

const inStock = tshirt.some((model) => model.inStock);

document.write("<br> ----------------");
document.write(inStock ? "T-Shirt Stokta > Satın Al" : "Stok Bitti!");

//! 10.18) every()
// Dizideki bütün elemanların koşulu sağlayıp sağlamadığını kontrol eder
// bütün elemanlar koşulu sağlıyorsa true döner
// en az 1 eleman koşulu sağlamıyorsa false döner

const numbers3 = [10, 20, 30, 40, 50, 60, 70, 80, 90, 100];

const result3 = numbers3.every((number) => number > 50);
console.log(result3);

const result4 = numbers3.every((number) => number > 5);
console.log(result4);

// Örnek: Bir kullanıcı sepetteki ürünleri satın alırken yapılan son kontrol
const sepet = [
  { isim: "Laptop", stoktaVar: true },
  { isim: "Mouse", stoktaVar: false },
  { isim: "Klavye", stoktaVar: true }, // Bu ürün stokta yok!
];

// Sepetteki her ürün stokta var mı
const siparisVerilebilirMi = sepet.every((urun) => urun.stoktaVar);

document.write("<br> ---------------- <br>");
document.write(
  siparisVerilebilirMi ? "Sepeti Onayla" : "Bir Ürünün Stoğu Bitmiş Lütfen Sepeti Güncelleyin",
);

//! 10.19) reduce()
// Bir dizideki bütün elemanları kullanarak tek bir sonuç üretir
// En yaygın kullanımı dizideki sayısal değerleri toplamak içindir.
const sepetim = [
  { isim: "Laptop", fiyat: 15000 },
  { isim: "Mouse", fiyat: 300 },
  { isim: "Klavye", fiyat: 800 },
];

const toplam = sepetim.reduce((toplam, urun) => toplam + urun.fiyat, 0);

document.write("<br> ----------------- <br>");
document.write("Sepetteki Ürünleri Toplam Fiyat: " + toplam);

//! 10.20) sort()
// Dizideki elemanları sıralamaya yarar
// Orjinal diziyi günceller

// A) Sayılarda sort kullanımı
const numbers4 = [99, 6, 32, 7, 28, 102, 57, 42, 89];

document.write("<br> ----------------- <br>");
document.write(numbers4);

// Küçükten büyüğe sıralama
numbers4.sort((a, b) => a - b);

document.write("<br> ----------------- <br>");
document.write(numbers4);

// Büyükten küçüğe sıralama
numbers4.sort((a, b) => b - a);

document.write("<br> ----------------- <br>");
document.write(numbers4);

// B) Metinler sort kullanımı
document.write("<br> ----------------- <br>");
document.write("Öğrenciler: " + ogrenciler);

// A>Z sıralama
ogrenciler.sort((a, b) => a.localeCompare(b));

document.write("<br> ----------------- <br>");
document.write("Öğrenciler: " + ogrenciler);

// Z>A sıralama
ogrenciler.sort((a, b) => a.localeCompare(b)).reverse();

document.write("<br> ----------------- <br>");
document.write("Öğrenciler: " + ogrenciler);
