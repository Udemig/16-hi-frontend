/*
! 14) Modern Javascript / ES6+
* Backtick ve Template Literals
* Object Destructuring
* Array Destructuring
* Destructuring ile Varsayılan Değerler
* Fonksiyon Parametrelerinde Destructuring
* Spread Operator
* Array ile Spread Kullanımı
* Object ile Spread Kullanımı
* Spread ile Veri Güncelleme
* Rest Operator
* Rest Parameters
* Destructuring ile Rest Kullanımı
* Optional Chaining
* Nullish Coalescing Operator
* || ve ?? Farkı
* Logical OR Assignment
* Nullish Assignment
* Shorthand Properties
*/

//! 1) Destructuring Nedir?
// Destructuring, Array ve Object içersindeki değerleri daha kolay şekilde değişkenlere almamızı sağlar

// A) Nesnelerde Destructuring
const user = {
  name: "Ahmet",
  age: 25,
  city: "İstanbul",
};

// Normal kullanım
// const name = user.name;
// const age = user.age;
// const city = user.city;

// Destructuring Kullanım
const { name, city } = user;

// document.write(`<br> Name: ${name}`);
// document.write(`<br> City: ${city}`);

// B) Dizilerde Destructuring
const colors = ["Kırmızı", "Mavi", "Yeşil"];

// Normal kullanım
// const firstColor = colors[0]
// const secondColor = colors[1]
// const thirdColor = colors[2]

// Destructuring kullanım
const [firstColor, secondColor, thirdColor] = colors;

// document.write(`<br> İlk Renk: ${firstColor}`);
// document.write(`<br> İkinci Renk: ${secondColor}`);

//! 2) Spread Operator?
// Bit Array veya Object içerisindeki değerleri yaymak için kullanılır

// A) Array Kopyalamak
const numbers = [10, 20, 30];

const copiedNumbers = [...numbers];

console.log(numbers);
console.log(copiedNumbers);

// B) Array'e Yeni Eleman Ekleyerek Yeni Array Oluşturmak
const newNumbers = [5, ...numbers, 40];

console.log(newNumbers);

// C) İki array'i birleştirmek
const frontend = ["HTML", "CSS"];
const programming = ["Javascript", "Typescript"];

const tech = [...frontend, ...programming];

console.log(tech);

// D) Nesneye Yeni Property Ekleme
const userOne = {
  name: "Ali",
  age: 25,
};

const userTwo = { ...userOne, city: "İzmir" };
console.log(userTwo);

// E) Nesnedeki Property'i Güncelleme
const userThree = {
  ...userOne,
  age: 29,
};
console.log(userThree);

//! 3) Rest Operator
// Spread ile aynı sembol kullanılır fakat görevi farklıdır
// Spread -> dağıtır
// Rest   -> toplar
// Fonksiyonlarda paramtre bölümünde kullanılır.

function showNumbers(...numbers) {
  console.log(numbers);
}

showNumbers(10, 20, 45, 64, 14, 50, 12, 56);

// Örnek: Rest Nasıl Kullanılabilir?
function sum(...numbers) {
  return numbers.reduce((total, number) => total + number, 0);
}

const total = sum(3, 8, 12, 56, 23, 89, 15, 26, 86, 1);
console.log(total);

// A) Array Destructing İle Rest Birlikte Kullanımı
const numbers2 = [10, 20, 30, 40, 50, 60];

const [first, second, ...others] = numbers2;

console.log("first", first);
console.log("second", second);
console.log("others", others);

// B) Object Destructing İle Rest Birlikte Kullanımı
const userFour = {
  id: 1,
  name: "Ayşe",
  age: 37,
  city: "Ankara",
  password: "@aYSche0532",
};

const { password, ...userWithoutPassword } = userFour;

console.log("password", password);
console.log("userWithoutPassword", userWithoutPassword);
console.log("userFour", userFour);

//! 4) Optional Chaining (?.)
const product = {
  name: "Ekran Kartı",
  model: "RTX 5070ti",
  price: 75000,
  shipping: {
    country: "Türkiye",
    city: "Muğla",
    // address: "8092sk no:78 d:10",
  },
};

console.log("Model", product.model);
console.log("Fiyat", product.price);

// 1. Kullanım
console.log(product.shipping.address && product.shipping.address.toLowerCase());

// 2. Kullanım
console.log(product.shipping.address?.toLowerCase());

//! 5) Nullish Coalescing Operator ??
// Bir değer null veya undefined ise varsayılan değer vermek için kullanılır

const username = 0;

console.log(username ?? "Misafir");
console.log(username || "Misafir");

// Not: ?? Operatörü 0'ı değer olarak kabul eder ama || operatörü 0'ı null olarak kabul eder

//! 6) Shorthand Properties
// Değişken adı ile property adı aynıysa kısa yazım kullanılabilir
const fullName = "Ömer Aydın";
const age = 80;

// Normal:
const person1 = {
  fullName: fullName,
  age: age,
};
console.log(person1);

// Kısa Kullanım
const person2 = {
  fullName,
  age,
};
console.log(person2);

/*
! 15) DOM VE DOM Manipülasyonu
* DOM Nedir?
* document
* DOM Tree
* Element Seçme
* getElementById()
* querySelector()
* querySelectorAll()
* NodeList
* textContent
* innerHTML
* Attribute Yönetimi
* getAttribute()
* setAttribute()
* removeAttribute()
* Form Element Değerleri
* .value
* .checked
* classList
* classList.add()
* classList.remove()
* classList.contains()
* classList.toggle()
* Inline Style Yönetimi
* document.createElement()
* append()
* appendChild()
* Dinamik Element Oluşturma
* Object Verisini DOM’a Aktarma
* Array of Objects Verisini DOM’a Aktarma
* Template Literal ile HTML Oluşturma
* map() ile HTML Render Etme
* Element Silme
* Parent Element
* Child Elements
* Sibling Elements
* closest()
* data-* Attribute
* dataset
*/

//! 1) DOM Nedir?
// DOM, HTML belgesinin Javascript tarafından erişilebilir hale getirilmiş yapısıdır.
// DOM: Document Object Model
// Tarayıcı HTML kodunu okur ve Javascript kullanabileceği bir nesne yapısına dönüştür

//! 2) document
// Tarayıcıdaki mevcut HTML belgesini Javascript içerisinde document ile temsil ederiz
// document üzerinden:
// element seçebiliriz
// element değiştirebiliriz
// yeni element oluşturabiliriz
// element silebiliriz
// attirbute değiştirebiliriz
// CSS class yöntebiliriz
console.dir(document);

//! 3) DOM Tree
// HTML yapısı birbirine baplı elementlerden oluşur
// Bu elementler arasında akrabalık ilişkisine benzer bir ilişki mevcuttur
// Parent | Child | Siblings

//! 4) Element Seçmek
// DOM üzerinden işlem yapmadan önce hangi HTML elementiyle çalışacağımı seçememiz gerekir
// Fonksiyonlar: getElementById() | getElementsByClassName() | getElementsByTagName() | querySelector() | querySelectorAll()

//! 5) getElementById()
// Bir elementi id değerine göre seçer
const title = document.getElementById("title");
console.dir(title);

//! 6) getElementsByTagName()
// Etiket ismine göre eşleşen bütün elementleri getirir
const pTags = document.getElementsByTagName("p");
console.log(pTags);

//! 7) getElementsByClassName()
// Sınıf ismine göre eşleşen bütün elementleri getirir
const boxes = document.getElementsByClassName("kutu");
console.log(boxes);

//! 8) querySelector()
// CSS selector mantığıyla çalışır ve eşleşen ilk elementi getirir
// a) id
const title2 = document.querySelector("#title");
console.log(title2);

// b) class
const box = document.querySelector(".kutu");
console.log(box);

// b) tag
const button = document.querySelector("button");
console.log(button);

//! 9) querySelectorAll()
// CSS selector mantığıyla çalışır ve eşleşen bütün elementleri getirir
const boxes2 = document.querySelectorAll(".kutu");
console.log(boxes2);

//! 10) textContent
// Bir elementin metin içeriğini okumak ve değiştirmek için kullanılır
title.textContent = "Modern Javascript ve DOM";

//! 11) innerHTML
// Bir elemnentin HTML içeriğini okumak ve değiştirmek için kullanılır
const p = document.querySelector("#ünite");
p.innerHTML = "<b>DOM</b> ünitesideyim";

//! 12) Attribute Nedir?
// HTML elementlerinin özelliklerine attribute denir
// input'un type değeri
// img'nin src değeri
// a'nın href değeri

//! 13) getAttribute()
// Bir attribute değerini almak için kullanılır
const link = document.querySelector("a");
console.log(link.getAttribute("href"));
console.log(link.href);

//! 14) setAttribute()
// Bir attribute değerini değiştirmek için kullanılır
link.setAttribute("href", "https://youtube.com");
link.href = "https://youtube.com";

//! 15) setAttribute()
// Bir attribute değerini kaldırmak için kullanılır
link.removeAttribute("href");

//! 16) Form Elementlerinin Değerini Alma
// A) Input/Select/TextArea değerine erişme
const emailInput = document.querySelector('input[type="email"]');
console.log(emailInput.value);

// B) Checkbox değerine erişme
const termsCheck = document.querySelector("#check");
console.log(termsCheck.checked);

//! 17) CSS Class Yönetimi
// Bir elementin sınıflarına erişmek için classList özelliğini kullanırız
const formButton = document.querySelector("button");
console.log(formButton.classList);

// A) classList.REMOVE(): Sınıf Kaldır
formButton.classList.remove("btn-primary");

// B) classList.add(): Yeni sınıf Ekle
formButton.classList.add("btn-danger");

// C) classList.toggle(): Sınıf varsa kaldırır, yoksa ekler
formButton.classList.toggle("btn-danger"); // kaldırdı
formButton.classList.toggle("btn-primary"); // ekledi

// D) classList.contains()
// Bir class'ın element üzerinde bulunup bulunmadığını kontrol eder: true | false
console.log(formButton.classList.contains("btn-primary")); // true
console.log(formButton.classList.contains("btn-danger")); // false

//! 18) Inline Style Değiştirme
// Javascript ile doğrudan CSS property değiştrebiliriz
// CSS'ten tek farkı key isimlerinde özel karakter olamayacağı için camelCase yazarız
// box-shadow -> boxShadow

title.style.color = "purple";
title.style.backgroundColor = "orange";

//! 19) Yeni Element Oluşturmak
// Yeni html etiketini document.createElement() methoduyla oluştururuz
const h1 = document.createElement("h1");

// Yeni oluşturulan elementin yazı içeriğini belirle
h1.textContent = "Javascript Tarafından  Yazılan Yazı";

// Yeni oluşturulan elementi başka bir elementin içerisine ekle
box.append(h1);

// append vs appendChild:  append, yazı içeriğini veya birden fazla elementi aynanda ekleyebilir. appendChild, yazı içeriği eklyemez ve tek bir elementi ekleyebilir

//! 20) Element Silmek
document.querySelector("#temp").remove();

//! 21) closest()
// Bir elementten yukarı doğru gidereke belirli selector'a uyan en yakın elementi bulur
const delBtn = document.querySelector("#del");
const closestCard = delBtn.closest(".card");

closestCard.remove();

//! 22) data-* Attribute
// HTML elementlerine özel veri eklemek için kullanılabilir
// Elementlere eklenen data-* özelliklerine dataset property'si üzerinden erişebiliriz
const card = document.querySelector(".card");
console.log(card.dataset);
