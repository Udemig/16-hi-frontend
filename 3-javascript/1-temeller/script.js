//! 1) Değişkenler
const tcNo = 186345097354;

let yas = 29;

var isim = "Ali";

document.write("<br /> Kullanıcının TC'si: " + tcNo);
document.write("<br /> Kullanıcının İsmi: " + isim);
document.write("<br /> Kullanıcının Yaşı: " + yas);

yas = 30;
document.write("<br /> Kullanıcının Yaşı: " + yas);

// Değişken tanımlama (declaration)
let boy;

// Değişkene değer atama (assignment)
boy = 187;

// Değişkeni kullanma / çağırma
boy;

//! 2) Veri Tipleri
// Program içerisinde sakladığımız bütün veriler aynı türde Değildir
// string
// number
// boolean
// undefined
// null
// bigint
// symbol

//! 2.1) String
// String metinsel verileri temsil eder
let eposta = "ali@gmail.com";
let sehir = `İzmir`;
let telNo = "905446789432";

//! 2.2) Number
// Number, sayısal verileri temsil eder
let fiyat = 300;
let puan = 4.5;
let kredi = 0;

//! 2.3) Boolean
// Boolean veri sadece iki değer alabilir: true, false
let evliMi = true;
let cocukluMu = false;
let kullaniciAdminMi = true;

//! 2.4) Undefined
// Bir değişken oluşturulmuş fakat henüz değeri tanımlanmamış anlamına gelir
let klavyeModeli;
let mouseModeli = undefined;

//! 2.5) Null
// `Bilinçli olarak` boş bırakılmış anlamına gelir
let arabaModeli = null;

//! 2.6) typeof
// Bir değişkenin tipini öğrenmeye yarayan operatör
console.log(typeof evliMi);
console.log(typeof klavyeModeli);
console.log(typeof fiyat);
console.log(typeof eposta);

//! 2.7) Tip Dönüşümü - Type Conversion
// Bir değişkenin veri tipini aşağıdaki fonksiyonlarla değiştirebilir:
// String()
// Number()
// Boolean()
console.log(telNo);
console.log(typeof telNo);

console.log(Number(telNo));
console.log(typeof Number(telNo));

console.log(fiyat);
console.log(String(fiyat));

console.log(Boolean(4.5));
console.log(Boolean(0));

// Her tipte veriyi kafamıza göre değiştiremiyoruz verinin uygun formatta olması gerekli
console.log(Number("ahmet")); // NaN - Not a Number

console.log("------------------------------------------");

//! 3) Operatörler ve Karşılaştırmalar
// Operatörler, JavaScript içerisinde değerler üzerinde işlem yapmak için kullanılan semboller veya anahtar kelimelerdir.
// =   --------->  atama opearörü
// +   --------->  toplama opearörü
// typeOf   ---->  tip öğrenme opearörü

//! 3.2) Aritmetik Operatörler
// + | - | * | / | % | **

// Toplama Operatörü: +
// İki sayıyı toplamak için kullanılabilir
// İki string değerleri birleştirmek için de kullanılabilir
console.log(67 + 89);
console.log("67" + "89");
console.log("Merhaba" + "Dünya");

// Çıkarma Operatörü: -
console.log(100 - 75);

// Çarpma Operatörü: *
console.log(50 * 4);

// Bölme Operatörü: /
console.log(503 / 5);

// Mod Operatörü: %
console.log(503 % 5);

// Üs Alma Operatörü
console.log(2 ** 10);

// İşlem önceliği mantığı aynı
console.log((10 + 20) * 2);

//! 3.3) Atama (Assignment) Operatörleri
// Assignment operatörleri değişkenlere değer atamak veya mevcut değeri güncellemek için kullanılır.

let sayi = 10;
console.log(sayi);

sayi = 11;
console.log(sayi);

sayi = sayi + 1;
console.log(sayi);

sayi++; // increment: 1 arttırma
console.log(sayi);

sayi += 12;
console.log(sayi);

sayi--; // decrement: 1 azaltma
console.log(sayi);

sayi -= 4;
console.log(sayi);

sayi *= 5;
console.log(sayi);

sayi /= 4;
console.log(sayi);

console.log("===========");

//! 3.4) Karşılaştırma Operatörleri
// Karşılaştırma operatörleri iki değeri karşılaştırmak için kullanılır.
// Karşılaştırma işlemlerinin sonucu her zaman: true, false
// > | < | >= | <= | == | === | != | !==

console.log(70 > 50); // true
console.log(50 > 70); // false

console.log(10 < 20); // true
console.log(20 < 10); // false

console.log(30 >= 30); // true
console.log(30 >= 20); // true
console.log(30 >= 40); // false

console.log(70 <= 70); // true
console.log(70 <= 80); // true
console.log(70 <= 10); // false

// == sadece değer kontrolü yapar
console.log(100 == 100); // true
console.log(100 == "100"); // true
console.log(100 == 101); // false

// === hem değer hem tip kontrolü yapar
console.log(200 === 200); // true
console.log(200 === "200"); // false

//. != iki değer birbirinden farklı mı kontrolü yapar
console.log("ali" != "veli"); // true
console.log("ali" != "ali"); // false

//. !== iki değerin değer ve veri tipi açısından fakrlı mı kontrolü yapar
console.log(30 !== 29); // true
console.log(30 !== 30); // false
console.log(30 !== "30"); // true

console.log("=============");

//! 3.5) Mantıksal (Logical) Operators
// Birden fazla koşulu birlikte değerlerlendirmek için kullanırız
// && - || - !

// && - VE (AND) Operatörü
// Birden fazla koşulun aynı anda doğru olup olmadığını kontrol etmek için kullanılır
// Bütün koşullar doğruysa `true` döndürür
// Koşullardan en az biri yanlışsa `false` döndürür

console.log(10 > 9 && "ali" === "ali"); // true
console.log(10 > 9 && "ali" === "veli"); // false
console.log(9 > 10 && "ali" === "veli"); // false

console.log(true && true); // true
console.log(true && true && false); // false

// || - VEYA (Or) Operatörü
// Birden fazla koşuldan en az birinin doğru olup olmadığını kontrol etmek için kullanılır.
// Koşulalrdan en az biri doğruysa `true` döndürür
// Bütün koşullar yanlışsa `false` döndürür

console.log(false || false || false || true); // true
console.log(false || false || false || false); //false

// Örnekler
const aliYas = 15;
const biletiVarMi = true;
const ebeveyniGeliyorMu = true;

const konsereGirebilir = (aliYas > 18 || ebeveyniGeliyorMu === true) && biletiVarMi === true;

console.log("Ali konsere girebilir mi? " + konsereGirebilir);

//! Operatörü
// (!) Operatörü js'te mantıksal değili (NOT) ifade eder. Bir değerin boolean karşılığını tersine çevirir

let girisYapiliMi = true;

console.log(!girisYapiliMi);
console.log(!true);
console.log(!false);

// iki tane !! kullanılırsa ne olur
// Boolean olmayan bir değeri Boolean değere çevirmek için kullanılır
console.log(!!"Merhaba");
console.log(!!"");
console.log(Boolean("Merhaba"));
console.log(Boolean(""));
