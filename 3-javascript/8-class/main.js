//! Class
// Class, benzer özelliklere ve davranışlara sahip Object'ler oluşturmak için kullanılan bir şablondur.

//! 1) Neden Class var?
/*
 * Aynı yapıya sahip çok fazla kullanıcı oluşturursak sürekli aynı object yapısını  tekrar mı yazacağız?

 * Class, aynı yapıya ve davranışlara sahip nesneler oluşturmak için kullanabileceğimiz bir şablondur.

 * Basit benzetme:
 * Class = kalıp / şablon
 * Object = o kalıptan oluşturulan gerçek nesne
*/
const user1 = {
  name: "Ali",
  age: 24,
};

const user2 = {
  name: "Ahmet",
  age: 48,
};

//! Class Tanımı
// User isminde bir sınıf oluşturduk
// constructor, new ile sınıf çağrıldığında otomatik çalışır
// constructor, sınıfa dışarıdan değer almaya yarar
// this, oluşturulan nesneyi ifade eder
class User {
  isim = "Ali";
  yas = 45;
}

class User {
  constructor(name, age) {
    this.isim = name;
    this.yas = age;
  }
}

//! Nesne (Instance) Oluşturma
// new anahtar kelimesiyle bir sınıftan nesne oluşturabiliiriz
const user3 = new User("Mehmet", 45);
const user4 = new User("Fatna", 18);

console.log(user3);
console.log(user4);

// Örnek
// sınıf oluştur
class Product {
  constructor(name, price, category) {
    this.name = name;
    this.price = price;
    this.category = category;
  }

  showInfo() {
    console.log(`${this.name} - ${this.price} TL`);
  }
}

// sınıftan örnek al
const product1 = new Product("Laptop", 35999, "elektronik");
const product2 = new Product("T-shirt", 850, "giyim");

console.log(product1);
console.log(product2);
product1.showInfo();
product2.showInfo();

//! Prototoype
// Protoype, Javascript'te nesnelerin ortak özellik ve methodlarını paylaşmasını sağlayan bir mekanizmadır.

/*
  ! Extend - Inheritance 
  * JavaScript'te extends anahtar kelimesi, Kalıtım (Inheritance) yapmak için kullanılır. Basitçe ifade etmek gerekirse; bir sınıfın (class), başka bir sınıfın özelliklerini ve yeteneklerini "miras almasını" sağlar. Bu sayede aynı kodları tekrar tekrar yazmaktan kurtuluruz.
*/

// 1. ANA SINIF (Parent Class)
// Tüm akıllı cihazlarda ortak olan temel özellikleri buraya yazıyoruz.
class AkilliCihaz {
  constructor(marka, pilYuzdesi) {
    this.marka = marka;
    this.pilYuzdesi = pilYuzdesi;
  }

  sarjEt() {
    this.pilYuzdesi = 100;
    console.log(`${this.marka} cihazı 100%'e şarj edildi!`);
  }
}

// 2. ALT SINIF (Child Class)
// "extends" ile AkilliCihaz sınıfının marka, pil ve şarj olma özelliklerini miras alıyoruz.
class AkilliTelefon extends AkilliCihaz {
  constructor(marka, pilYuzdesi, model, kamera) {
    // super(): ebevyn sınıfının (AkilliCihaz) contructur'ına değer gönderir
    super(marka, pilYuzdesi);

    this.model = model;
    this.kamera = kamera;
  }

  // override
  sarjEt() {
    super.sarjEt();
    console.log("yeni özellik");
  }

  fotografCek() {
    if (this.pilYuzdesi > 5) {
      console.log(`${this.model} ile ${this.kamera} MP fotoğraf çekildi`);
      this.pilYuzdesi -= 5;
    } else {
      console.log(`Telefon şarjı çok az! Lütfen önce şarj edin`);
    }
  }
}

// Kullanım
const telefonum = new AkilliTelefon("Iphone", 20, "17 Pro", 128);

console.log(telefonum);
telefonum.fotografCek();
telefonum.fotografCek();
telefonum.fotografCek();
telefonum.fotografCek();
telefonum.sarjEt();

//! JS Yerleşik Sınıfları

// A) Error Sınıfı
// Hata bilgilerini içeren nesneler oluşturmak için kullanırız
const error = new Error("İnternete bağlanamadı");
console.error(error);

// B) Promise Sınıfı
// Asenkron işlem oluştumak için kullanılır
new Promise((resolve, reject) => {});

// C) Formdata Sınıfı
new FormData();

// D) Set Sınıfı
// Benzersiz diziler oluşturmak için kullanılır
const aramaGecmisi = ["telefon", "kılıf", "telefon", "kulaklık", "kılıf"];

const benzersizSet = new Set(aramaGecmisi);

console.log(aramaGecmisi);
console.log(benzersizSet);

// E) Date Sınıfı
// Güncel tarih verisini almak ve formatlmak için kullanılır

// 1) Bugünkü tarihi baz alır
const bugun = new Date();

// 2) İstediğimiz tarihi baz alır
const cumhuriyetinTarihi = new Date("1923-10-29");

// 3) Tarih içinden Parçaları almak

// Yılı almak
document.write(`<h5>Yıl: ${cumhuriyetinTarihi.getFullYear()}</h5>`);

// Ayı almak (0-11 arası değer döner)
document.write(`<h5>Ay: ${cumhuriyetinTarihi.getMonth() + 1}</h5>`);

// Ayın gününü almak (1-31 arası değer döner)
document.write(`<h5>Gün: ${cumhuriyetinTarihi.getDate()}</h5>`);

// Haftanın gününü almak (0-6 arası değer döner 0:pazar - 1:pazartesi)
document.write(`<h5>Gün: ${cumhuriyetinTarihi.getDay()}</h5>`);

// 4) Tarihi Kullanıcıya Güzel Gösterme
// Nesne formatındaki tarihi okunaiblir string formatına çevirir

// Tarihi getir
document.write(`<h5>Tarih: ${cumhuriyetinTarihi.toLocaleDateString()}</h5>`);

// Saati getir
document.write(`<h5>Tarih: ${cumhuriyetinTarihi.toLocaleTimeString()}</h5>`);

// Tarihi&Saati getir
document.write(`<h5>Tarih: ${cumhuriyetinTarihi.toLocaleString()}</h5>`);

// Çok daha şık bir formata çevirme
const secenekler = {
  year: "numeric",
  month: "long",
  day: "numeric",
  weekday: "long",
};

document.write(`<h5>Tarih: ${cumhuriyetinTarihi.toLocaleDateString("tr", secenekler)}</h5>`);

/*
  ! Javascript Modules - Export & Import
  
  ! Module Nedir?
  * Bir javacript projesini tek bir dosyada yazmak yerine farklı dosyalara bölebiliriz. Örneğin:
  * main.js
  * utils.js
  * service.js
  * constants.js
  
  ! Neden Module
  * Kodları ayırırız.
  * Tekrar kullanılabilir hale getiririz.
  * Dosyaların görevlerini belirleriz.
  * Projeyi daha okunabilir hale getiririz.
  * Bakımı kolaylaştırırız.

*/

//! Import
// Başka bir dosyadan dışarı aktarılan değeri kullanmak için:
import { aciklama, baslik } from "./constants.js";

console.log(baslik);
console.log(aciklama);

//! Default Import
// import edilen değişken istediğim adı verebiliriz
import format from "./helpers.js";

console.log(format(bugun));
