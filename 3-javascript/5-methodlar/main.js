//! 11) String Methodları
// String, metinsel verileri temsil eder
// String 3 farklı yolla tanımlanabilir: "" '' ``

const name = "Ahmet";
const city = "İstanbul";
const message = `Merhaba Javascript`;

// Metni backtick ile tanımlarsanız içerisine js kodu yazabilirsiniz: ${}
document.write(`<br> Merhaba, Benim adım ${name} Seninki Ne?`);

//! 1) String Uzunluğu — .length
// Bir string kaç karakterden oluştuğunu verir
document.write(`<br> message metni ${message.length} karakterden oluşur`);

//! 2) String Index Mantığı
// String içerisindeki karaktereler index ile ulaşabiliriz
// Dizilerde olduğu gibi index 0'dan başlar
document.write(`<br> name: ${name}`);
document.write(`<br> name[0]: ${name[0]}`);
document.write(`<br> name[4]: ${name[4]}`);

//! 3) .toUppercase()
// String içerisindeki harfleri büyük harfe çevirir
document.write(`<br> message: ${message}`);
document.write(`<br> message: ${message.toUpperCase()}`);

//! 4) .toLowercase()
// String içerisindeki harfleri küçük harfe çevirir
document.write(`<br> message: ${message.toLowerCase()}`);

//! 5) .trim()
// String'in başındaki ve sonundaki boşlukları temizler
const username = "         ali     ";
console.log(username);
console.log(username.trim());
console.log(username.trimStart());
console.log(username.trimEnd());

//! 6) .includes()
// Bir string içerisinde belirli bir ifade bulunup bulunmadığını kontrol eder: true | false return eder
console.log(message.includes("Javascript")); // true
console.log(message.includes("Selam")); // false

//! 7) .startsWith()
// String'in belirli bir ifadeyle başlayıp başlamadığını kontrol eder
console.log(message.startsWith("Merhaba")); // true
console.log(message.startsWith("Javascript")); // false

//! 8) .endsWith()
// String'in belirli bir ifadeyle bitip bitmediğini kontrol eder
console.log(message.endsWith("ipt")); // true
console.log(message.endsWith("Merhaba")); // false

//! 9) .indexOf()
// Bir karakter veya metnin başladığı index'i verir
console.log(message.indexOf("J"));
console.log(message.indexOf("Javascript"));

//! 10) .lastIndexOf()
// Aynı karakter veya ifade birden fazla kez geçiyorsa son bulduğu indexi verir
const newMessage = "java ve javascript'in farklı bir dil olduğunu  öğrendim";

console.log(newMessage.indexOf("java")); // 0
console.log(newMessage.lastIndexOf("java")); // 8

document.write("<br> ----------- <br>");
document.write(`newMessage: ${newMessage}`);

//! 11) .charAt()
// Belirli bir index'teki katakteri verir
document.write("<br> ----------- <br>");
document.write(`.chartAt(0): ${newMessage.charAt(0)} <br>`);
document.write(`.chartAt(10): ${newMessage.charAt(10)} <br>`);
document.write(`.chartAt(15): ${newMessage.charAt(15)} <br>`);

//! 12) .slice()
// String'in belirli bir bölümünü alır
document.write("<br> ----------- <br>");
document.write(`.slice(0,18): ${newMessage.slice(0, 18)}`);

//! 13) .substring()
// String'in belirli bir bölümünübü alır
document.write("<br> ----------- <br>");
document.write(`.substring(0,18): ${newMessage.substring(100)}`);

//! 14) .replace()
// String içerisindeki ilk eşleşen ifadeyi değiştirir
document.write("<br> ----------- <br>");
document.write(`.replace(): ${newMessage.replace("java", "typescript")}`);

//! 15) .replaceAll()
// String içerisindeki bütün eşleşen ifadeleri değiştirir
const userInput = "Mustafa Kemal Atatürk";

document.write("<br> ----------- <br>");
document.write(`.replace(): ${userInput.replace(" ", "_")} <br>`);
document.write(`.replaceAll(): ${userInput.replaceAll(" ", "_")} <br>`);

//! 16) .split()
// String'i belirli bir ayırıcıya göre Array'e dönüştürür
const technologies = "HTML,CSS,JavaScript";

console.log(technologies);
console.log(technologies.split(","));

const sentence = "Javascript öğrenmek çok keyifli";

console.log(sentence);
console.log(sentence.split(" "));

const word = "javascript";

console.log(word);
console.log(word.split(""));

//! 17) Method Chaining
// Methodları art arda kullanabiliyoruz
const userInp = "           AHMET      ";

const result = userInp.trim().toLowerCase();

console.log(result);

//! 18) String'ler Immutable'dır
// String methodları orjinal String'i değiştirmez

const name2 = "ahmet";

const name2Upper = name2.toUpperCase();

console.log(name2);

//! 19) .padStart() | .padEnd()
// Bir metnin uzunluğunu belirlediğiniz bir sayıya tamamlamak için başına istediniz karakteri ekler

//* Seneryo-1: Fatura numarasını 6 haneye tamamla
const faturaNo = "421";

// Fatura numarası 6 karakter olana kadar başına 0 ekle
const formatliFatura1 = faturaNo.padStart(6, "0");
const formatliFatura2 = faturaNo.padEnd(6, "0");

console.log(formatliFatura1);
console.log(formatliFatura2);

//* Seneryo-2: Kredi kartı numarasını gizle
const sonDortHane = "4567";

// Kart 16 haneliymiş gibi başına "*" ekle
const gizliKart = sonDortHane.padStart(16, "*");
console.log(gizliKart);

//! 12) Number Methodları

//! 1) Number()
// Bir değeri Number veri tipine çevirmeye yarar
// Çeviremezse NaN döndürür

console.log(Number("156000"));
console.log(Number("Ayşe"));

//! 2) Number.isNaN()
// Bir değerin gerçekten NaN olup olmadığını kontrol eder
// true yada false döndürür

const value1 = Number("Ahmet");
const value2 = Number("18900");

console.log(Number.isNaN(value1)); // true
console.log(isNaN(value2)); // false
console.log(isNaN(value2)); // false

//! 3) parseInt()
// Bir değeri tam sayıya çevirmeye yarar
const price = "19.99";

console.log(Number(price)); // 19.99
console.log(parseInt(price)); // 19

//! 4) parseFloat()
// Bir değeri ondalıklı sayıya çevirmeye yarar
console.log(parseFloat(price)); // 19.99

//! 5) Number.isIntiger()
// Bir değerin tam sayı olup olmadığını kontrol eder
// true yada false döner
console.log(Number.isInteger(10)); // true
console.log(Number.isInteger(10.8)); // false

//! 6) .toFixed()
// Ondalık basamak sayısını belirler
const price2 = 199.656712;

console.log(price2);
console.log(price2.toFixed(2));
console.log(price2.toFixed());

//! 7) Math Object
// Javascript içerisinde matematiksel işlemler için hazır bir nesnedir

//! 8) Mat.round()
// Bir sayıyı en yakın tam sayıya yuvarlar
console.log(Math.round(4.49));
console.log(Math.round(4.68));

//! 9) Math.floor()
// Sayıyı aşağı doğru yuvarlar
console.log(Math.floor(4.9));

//! 9) Math.ceil()
// Sayıyı yukarı doğru yuvarlar
console.log(Math.ceil(4.1));

console.log(Math.ceil(-4.9));
console.log(Math.round(-4.9));
console.log(Math.ceil(-4.1));

console.log(parseInt("4.1A"));
console.log(Math.ceil("4.1A"));

//! 10) Math.sqrt()
// Bir sayının karekökünü verir
console.log(Math.sqrt(64));
console.log(Math.sqrt(81));

//! 11) Math.abs()
// Bir sayının mutlak değerini verir
console.log(Math.abs(-20));
console.log(Math.abs(20));

//! 12) Math.pow()
// Üs alma işlemi yapar
console.log(Math.pow(2, 10));
console.log(Math.pow(3, 5));
console.log(Math.pow(10, 4));
console.log(2 ** 10);

//! 13) Math.max()
// Bir sayı listesidndeki en büyük değeri verir
console.log(Math.max(109, 82, 57, 205, 78, 12)); // 205

//! 14) Math.min()
// Bir sayı listesidndeki en küçük değeri verir
console.log(Math.min(109, 82, 57, 205, 78, 12)); // 12

//! 15) Math.random()
// 0 dahil, 1 hariç, 0-1 aralığında rastgele sayı üretir
console.log(Math.random());
console.log(Math.random() * 10);
console.log(Math.round(Math.random() * 100));

// Belirli bir aralıkta rastgele sayı üretmeye yarar
// Math.random() * (max - min) + min
// 0.5 * (10-5) + 5
// 0 * 5 + 5
