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
  "Aygul",
  "Burcu",
  "Derya",
  "Atlas",
  "Fatmanur",
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
