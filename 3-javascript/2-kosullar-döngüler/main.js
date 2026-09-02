//! 4) Koşullu İfadeler
// Bir durum doğruysa bir şey yap, yanlışsa başka bir şey yap

//? 4.1) Koşul Nedir
// Koşul, sonucunda `true` yada `false` elde ettiğimiz bir kontroldür
let yas1 = 20;
console.log(yas1 > 18); // true

//? 4.2) IF
// Belirli bir koşul doğru olduğunda kod çalıştırmak için kullanılır
// Koşul true ise {} içindeki kod çalışır, yanlışsa çalışmaz

// yazım mantığı
if ("koşul") {
  // koşul doğruysa çalışaccak kod
}

// örnek
let yas2 = 15;

if (yas2 > 18) {
  console.log("Giriş yapabilirsiniz!");
}

//? 4.3) ELSE
// Koşul yanlışsa başka bir işlem yapmak için kullanılır
let yas3 = 15;

if (yas3 > 18) {
  console.log("Giriş yapabilirsiniz");
} else {
  console.log("18 yaşından küçükler giriş yapamaz");
}

//? 4.4) ELSE IF
// Bazen yalnızca iki ihtimalimiz olmaz. Birden fazla durumu kontrol etmek istediğimizde else if kullanırız.
let not = 80;

if (not >= 85) {
  console.log("Çok İyi");
} else if (not >= 70) {
  console.log("İyi");
} else if (not >= 50) {
  console.log("Sınırda");
} else {
  console.log("Geliştirilmeli");
}

// Eğer not 85 ten büyük veya eşitse "çok iyi" yaz değilse ve eğer not 70'ten büyükse "iyi" yaz değilse geliştirilmeli yaz

//? 4.5) Gerçek Hayat Örneği 1
let sepetToplami = 1990;
let premiumHesapMi = false;

if (sepetToplami > 1000 || premiumHesapMi) {
  console.log("Ücretsiz kargo hakkı kazandınız.");
} else {
  console.log("Kargo ücreti uygulanacak");
}

//? 4.6) Tarayıcı Popupları
// alert(): Kullanıcıya uyarı mesajı göndermek için kullanılır
// alert("Giriş tespit edildi");

// confirm(): kullanıcnın onayını almaya yarayan bir popup açar
// confirm("Kullanıcıyı kaldıracaksınız. İşlemi onaylıyor musunuz?");

// prompt(): kullanıcı girdi alanına sahip bir popup açar
// prompt("Adınızı giriniz");

//? 4.7) Gerçek Hayat Örneği 2

// const kullanicininYasi = prompt("Yaşınızı giriniz");

// if (kullanicininYasi >= 18) {
//   alert("Bilet alma sayfasına ilerleyebilirsiniz");
// } else {
//   alert("Konser alanına 18 yaşının altındakiler kabul edilmiyor");
// }

//? 4.8) Terneray Operator ? :
// Basit if-else işlemlerini daha kısa yazmak için kullanılan bir operatördür

let yas4 = 12;

// a) aynı koşulu if-else yazalım
let durum1;

if (yas4 >= 18) {
  durum1 = "Yetişkin";
} else {
  durum1 = "Çocuk";
}

//b) aynı koşulu terneray ile yazalım
let durum2 = yas4 >= 18 ? "Yetişkin" : "Çocuk";

//c) else if durumunu ternerayde yazalım
let puan = 78;

let sonuc2 = puan >= 85 ? "Çok İyi" : puan >= 75 ? "İyi" : "Kötü";

// not: Koşul basitse terneray kullanılabilir. Karmaşık hale geliyorsa `if-else` daha okunaklıdır.

//? 4.9) Switch-Case
// Bir değişkenin belirli değerlerden hangisine sahip olduğunu kontrol etmek için switch case kullanılır

let gun = "pazar";
let ay = "ocak";

// a) aynı koşulu if-else ile yazalım
if (gun === "pazartesi" && ay === "ocak") {
  console.log("Bugün mesai var");
} else if (gun === "salı") {
  console.log("Bugün mesai var");
} else if (gun === "çarşamba") {
  console.log("Bugün mesai var");
} else if (gun === "perşembe") {
  console.log("Bugün mesai var");
} else if (gun === "cuma") {
  console.log("Bugün mesai var");
} else {
  console.log("Bugün tatil");
}

// b) aynı koşulu switch-case ile yazılım
switch (gun) {
  case "pazartesi":
    console.log("Bugün mesai var");
    break; // eşleşen case çalıştıktan sonra switch bloğundan çıkılmasını sağlar

  case "salı":
    console.log("Bugün mesai var");
    break;

  case "çarşamba":
    console.log("Bugün mesai var");
    break;

  case "perşembe":
    console.log("Bugün mesai var");
    break;

  case "cuma":
    console.log("Bugün mesai var");
    break;

  default: // hiçbir case eşleşmezse çalışır (else gibi düşünebilirsiniz)
    console.log("Bugün tatil");
    break;
}

// Not: Birden fazla değişken üzerinde koşul yazıyorsak if-else kullanırız ama tek bir değişken üzerinden koşul yazıyorsak switch case daha okunabilir bir yazım sunduğu için tercih edilebilir

//? 4.10) Gerçek Hayat Örneği 3
const kullaniciRolu = "premiun";

switch (kullaniciRolu) {
  case "admin":
    console.log("Admin Yetkilerine Sahipsiniz!");
    break;

  case "editor":
    console.log("Yazma/Düzenleme Yetkilerine Sahipsiniz!");
    break;

  case "user":
    console.log("Okuma yetkisine sahipsiniz");
    break;

  default:
    console.log("Yetkilendirme yapılamadı. Rol Hatalı!");
}

//! 5) Array - Dizi
// Array, birden fazla değeri tek bir yapı içerisinde saklamamızı sağlayan veri yapısıdr

const ogrenciler = ["Ali", "Ahmet", "Mustafa", "Ayşe"];

const gunler = ["Pazartesi", "Salı", "Çarşamba", "Perşembe", "Cuma", "Cumartesi", "Pazar"];

const skorlar = [80, 95, 70, 60];

document.write(gunler + "<br>");

//? 5.1) Index
// Array içerisinde her elemanın bir sıra numarası vardır
// Array indexleri 0'dan başlar
// Array içerisindeki bir elemana indexi üzerinden erişebilir Array[index]
document.write("Günler dizisinin 4 indexli elemanı: " + gunler[4] + "<br>");

//? 5.2) Array Uzunluğu - Length
// Bir array içerisinde kaç eleman olduğunu öğrenmek için kullanırız
document.write("Günler dizisinin eleman sayısı: " + gunler.length + "<br>");

//! 6) Loops - Döngüler
/*
 * Döngü, belirli bir koşul sağlandığı sürece aynı kod bloğunu tekrar çalıştıran yapıdır
 
 * Döngü Mantığını anlamak:
 * 1) Nerden başlayacağım
 * 2) Ne zamana kadar devam ediceğim
 * 3) Her turdan sonra ne değişicek
 
 * Iteration
 * Döngünün her bir çalışmasına verilen isimdir.
 * Yani döngü 5 kez çalışıyorsa, 5 iteration gerçekleşmiş olur
 */

//? 6.1) for Döngüsü
// Javascript'te en sık kullanılan temel döngülerden biridir.
// for ("başlangıç"; "koşul"; "değişim") {
// "tekrar çalışıcak kod"
// }

// Örnek
for (let i = 1; i <= 10; i++) {
  document.write("<br> Döngü Çalıştı:  " + i);
}

// Dizi üzerinde for döngüsü kullanma
const kullanicilar = ["Ali", "Veli", "Ayşe", "Fatma", "Murat", "Ahmet"];

for (let i = 0; i < kullanicilar.length; i++) {
  document.write("<br/>" + kullanicilar[i] + " kullanıcısına e-posta gönderildi");
}

// Örnek - 2
const sayilar = [10, 25, 40, 13, 8, 76, 52];

for (let i = 0; i < sayilar.length; i++) {
  if (sayilar[i] > 25) {
    document.write("<br>" + sayilar[i]);
  }
}

// Gerçek Hayat Örneği - 3
const sepetFiyatlari = [250, 765, 490, 543, 12, 27];

let toplam = 0;

for (let i = 0; i < sepetFiyatlari.length; i++) {
  toplam += sepetFiyatlari[i];
}

document.write("<br> Hesaplanan toplam: " + toplam);

//* `break` for döngüsünde de kullanılabilir ve döngüyü tamamen durdurur
for (let i = 1; i <= 10; i++) {
  if (i === 5) break;

  console.log(i);
}

console.log("------------");

//* `continue` mevcut döngünü turunu atlar ve sonraki tura geçer
for (let i = 1; i <= 10; i++) {
  if (i === 5) continue;

  console.log(i);
}

console.log("---------------");

//? 6.2) While Döngüsü
// while, belirli bir koşul doğru olduğu sürece çalışır
// while(koşul){ çalışıcak kod }

let i = 1;

while (i <= 10) {
  console.log(i);

  i++;
}

//? 6.3) Do While
// while döngüsü ile aynı işi yapar sadece farklı şekilde yazılır
// do{ çalışıcak kod }while(koşul)
let number = 10;

do {
  console.log(number);
  number++;
} while (number <= 20);

//? 6.4) While & Do While Farkı
/*
 * while:
 * * önce koşulu kontrol eder
 * * koşul doğruysa çalışır
  
 * do while:
 * * önce kodu çalıştırır
 * * sonra koşulu kontrol eder
 * * yani do while en az bir kez çalışır 
*/

while (10 > 20) {
  console.log("while çalıştı");
}

do {
  console.log("do-while çalıştı");
} while (10 > 20);

//? 6.5) for of döngüsü
// Belirli bir sayıda döngü oluşturmak yerine eğerki dizi dönüyorsak terchih ediceğimiz bir yöntemdir

const sayilar2 = [10, 25, 40, 13, 8, 76, 52];

// for versiyonu
for (let i = 0; i < sayilar2.length; i++) {
  console.log("for döngüsü: " + sayilar2[i]);
}

// for of versiyonu
for (var sayi of sayilar2) {
  console.log("for of döngüsü " + sayi);
}

// Örnek
let urunler = ["Ekmek", "Süt", "Yumurta"];
let fiyatlar = [20, 75, 99];
let toplamSepet = 0;

for (let fiyat of fiyatlar) {
  toplamSepet += fiyat;
}

console.log("toplam sepet", toplamSepet); // 194
