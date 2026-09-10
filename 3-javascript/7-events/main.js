/*
 ! 16) Events & Form Yönetimi
* Event Nedir?
* `addEventListener()`
* Click Event
* Event Handler
* Event Object
* `event.target`
* `event.currentTarget`
* Mouse Events
* Keyboard Events
* `event.key`
* Input Event
* Change Event
* Form Events
* Submit Event
* `preventDefault()`
* Input Değerlerini Alma
* Form Validation
* Checkbox Yönetimi
* Radio Button Yönetimi
* Select Yönetimi
* `FormData`
* Event Bubbling
* `stopPropagation()`
* Event Delegation
* `closest()` ile Event Yönetimi
* Dinamik Elementlerde Event Yönetimi
*/

//! 1) Event (Olay) Nedir=
/*
  Event, kullanıcı veya tarayıcı tarafından gerçekleşen bir olayı ifade eder
  Örnek olarak:
  - Butona tıklamak
  - Input içerisine yazı yazmak
  - Klavyeden tuşa basmak
  - Form göndermek
  - Mouse'u bir elementin üzerine getirmek
  birer event'tir.
  Javascript ile bu olayları dinleyebilir ve gerçekleştiğinde istediğimiz kodu çalıştırabiliriz.
*/

//! 2) addEventListener()
// Bir elementi dinlemek için kullanılır
// addEventListener fonksiyonu 2 parametre alır
// 1) İzlemek istediğimiz olayın ismi
// 2) Event Handler: Olay gerçekleşince çalışacak fonksiyon

//! 3) Event Object
// Vir event gerçekleştiğinde Javascript bizi olayla ilgili bilgiler içeren bir object verir

//! 4) event.target
// Event'i gerçekleştiren elementi verir.
const button1 = document.querySelector("#action");

button1.addEventListener("click", (event) => {
  console.log(event);
});

// Örnek: Açılır Kapanır Menü
const menuButton = document.querySelector("#menu-btn");
const menuList = document.querySelector("#menu");

menuButton.addEventListener("click", () => {
  menuList.classList.toggle("active");
});

//! 5) Mouse Events
// click | dblclick | mouseenter | mouseover | mouseleave
const box = document.querySelector("#box");

box.addEventListener("click", () => console.log("click çalıştı"));

box.addEventListener("dblclick", () => console.log("dblclick çalıştı"));

box.addEventListener("mouseenter", () => console.log("mouseenter çalıştı"));

box.addEventListener("mouseover", () => console.log("mouseover çalıştı"));

box.addEventListener("mouseleave", () => console.log("mouseleave çalıştı"));

//! 6) Keyboard Events
// Klavyedeki tuş haraketlerini dinlemek için kullanılır
// event.key hangi tuşa basıldığını verir

document.addEventListener("keydown", (event) => {
  if (event.key == "Escape") {
    menuList.classList.remove("active");
  }
});

//! 7) Input Event
// Input elementindeki değer değiştikçe çalışır
// input event: inputa her yeni değer girildiğinde çalışır
// change event: input'tan odak kabolduğunda çalışır
// event.target.value: inputa girilen değere erişmemizi sağlar
const usernameInput = document.querySelector("#username");

usernameInput.addEventListener("change", (event) => {
  console.log(event.target.value);
});

//! 8) Form Submit Event
// Form gönderildiğinde `submit` event'i gerçekleşir
// Type'ı submit olan butona tıklandığında veya ente'a tıklandığında çalışır
// HTML formunun varsayılan davranışı gönderildiğinde sayfayı yenilemektir
// Form gönderildiğinde event.target üzerinden inputlara erişebiliriz
// Form temizlemek için event.target.reset kullanılır

const loginForm = document.getElementById("login-form");

loginForm.addEventListener("submit", (event) => {
  event.preventDefault();

  // Yöntem - 1
  const username = event.target[0].value.trim();
  const password = event.target[1].value.trim();

  // Yöntem - 2
  const formData = new FormData(event.target);
  const userData = Object.fromEntries(formData.entries());

  alert(`${userData.username} | ${userData.password} bilgileriyle giriş yapıldı`);

  event.target.reset();
});

// Örnek
// 1) Gerekli elementleri seçme
const targetForm = document.querySelector("#target-form");
const targetList = document.querySelector("#target-list");

// 2) Olay dinleyicisi ekleme
targetForm.addEventListener("submit", (e) => {
  // 3) sayfanın yenilenmesini engelle
  e.preventDefault();

  // 4) inputun içindeki değeri al
  const text = e.target[0].value.trim();

  // 5) eğer input boşsa uyarı gönder
  if (!text) return alert("Lütfen boş bırakmayınız!");

  // 6) Yeni DOM elemanı oluşturma
  const li = document.createElement("li");
  li.textContent = text;

  // 7) Li üzerine tıklanırsa elementı kaldır
  li.addEventListener("click", () => li.remove());

  // 8) Oluşuturulan elemanı ekrandaki listeye gönder
  targetList.appendChild(li);

  // 9) Formu sıfırla
  e.target.reset();
});

/*
 ! 17) LocalStorage, Session Storage ve JSON

* Browser Storage
* `localStorage`
* `setItem()`
* `getItem()`
* `removeItem()`
* `clear()`
* LocalStorage Veri Tipleri
* JSON
* `JSON.stringify()`
* `JSON.parse()`
* Object Saklama
* Array Saklama
* Array of Objects Saklama
* Varsayılan Değer Kullanımı
* `sessionStorage`
* LocalStorage ve SessionStorage Farkı
* Browser Storage Güvenliği
* Developer Tools ile Storage Kontrolü


 ! 1) Browser Storage Nedir?
  Tarayıcı içerisinde bazı verileri saklayabiliriz
  Bu sayede sayfa yenilnese bile belirli veriler kaybolmaz
  BrowserStorage içerisinde: localStorage, sessionStorage

 ! 2) localStorage
   Verileri tarayıcı içerisinde kalıcı olarak saklamamızı sağlar
   Tarayıcı kapatılsa veya sayfa yenilense bile veri korunur
   methodlar: setItem() getItem() removeItem() clear()
   Localstorage string olarak veri saklar
*/

//! 3) Veri Kaydetme - setItem()
// iki parametre alır: key,value
localStorage.setItem("username", "furkanevin");

//! 4) Veri Okuma - getItem()
const username = localStorage.getItem("username");
console.log(username);

//! 5) Veri Silme - removeItem()
localStorage.removeItem("username");

//! 6) Tüm Verileri Silme - clear()
localStorage.setItem("username", "furkanevin");
localStorage.setItem("language", "tr");
localStorage.setItem("age", 36);

// localStorage.clear();

//! 7) JSON
// JavaScript Object Notation
// Verileri metinsel bir formatta taşımak ve saklamak için kullanılan yaygın bir veri formatıdır

//* A) Örnek Javascipt Objesi:
const user = {
  name: "Ali",
  age: 78,
  isAdmin: true,
};

/*
 * B) JSON görünümü buna benzer
 {
  "name":"Ahmet",
  "age": 78,
  "isAdmin": false
  }
*/

//! 8) JSON.stringify()
// Javascript Object veya Array'i JSON String'e dönüştürür
localStorage.setItem("user", JSON.stringify(user));

//! 9) JSON.parse()
// JSON String'i tekrar JavaScript verisine dönüştürür
const userJson = localStorage.getItem("user");
const userJs = JSON.parse(userJson);

console.log(userJson);
console.log(userJs);

//! 10) Temel Mantık
/*
 * Veri Yazarkan
  
  Javascript Verisi
          |
   JSON.stringify()
          |
        String
          |
    localStorage

  * Veri Okurken
     
    localStorage
         |  
      String
         |
   JSON.parse()
         |
  Javascript Verisi 
*/

/*
! 11) sessionStorage
* LocalStorage'a benzer şekilde veri saklar
* .setItem() .getItem() .removeItem() .clear()

* LocalStorage:
* * Veri tarayıcı oturumunu bittikten sonra korunur

* Ne zaman kullanılır?
* * Tema Tercihi
* * Favoriler
* * Sepet
* * Todo Listesi
* * Kullanıcı Tercihleri
* * Basit Uygulama Ayarları

* SessionStorage:
* * Veri ilgili sekmenin oturumu boyunca saklanır. 
 
* Ne zaman kullanılır?
* * Çok Adımlı Formlar
* * Geçici Arayüz Durumları
*/

sessionStorage.setItem("geçiciOturum", "mahsun");

// Örnek: Açık / Koyu Mod

// 1) Gerekli elementleri çağır
const themeBtn = document.querySelector("#theme-btn");
const body = document.body;

// 2) LocalStorage'a kayıtlı temayı al
const savedTheme = localStorage.getItem("theme");

// 2) Eğer daha önce koyu mod seçildiyse uygula
if (savedTheme === "dark") {
  body.classList.add("dark-mode");
  themeBtn.textContent = "Açık Moda Geç 🌞";
}

// 3)  Butona tıklanınca temayı değiştir ve kaydet
themeBtn.addEventListener("click", () => {
  // 4) toogle(): sınıf varsa siler, yoksa ekler
  // Eğer sınıf eklendiyse "true", silindiyse "false" döner
  const isDarkMode = body.classList.toggle("dark-mode");

  // 5) Duruma göre butondaki yazıyı ve localStorage kaydını güncelle
  if (isDarkMode) {
    themeBtn.textContent = "Açık Moda Geç 🌞";
    localStorage.setItem("theme", "dark");
  } else {
    themeBtn.textContent = "Koyu Moda Geç 🌛";
    localStorage.setItem("theme", "light");
  }
});

/*
! 19) Promise, Async, Await, API
* Senkron JavaScript
* Asenkron JavaScript
* `setTimeout()`
* `clearTimeout()`
* `setInterval()`
* `clearInterval()`
* Callback
* Promise
* Promise Durumları
* `.then()`
* `.catch()`
* `.finally()`
* Promise Chaining
* `async`
* `await`
* `try...catch`
* `finally`
* API
* Client ve Server
* HTTP Request
* HTTP Response
* HTTP Methodları
* REST API
* Fetch API
* `response.json()`
* `response.status`
* `response.ok`
* `throw new Error()`
* HTTP Status Kodları
* GET Request
* POST Request
* PUT Request
* PATCH Request
* DELETE Request
* Headers
* Request Body
* Query Parameters
* Dynamic URL
* API ve Form Kullanımı
* Loading State
* Success State
* Empty State
* Error State
* `Promise.all()`
* Sıralı ve Paralel Asenkron İşlemler
* API Verisini DOM'a Aktarma
*/

//! 1) Senkron JavaScript
// Javascript kodları normalde yukarıdan aşağıya doğru çalışır
// Bir işlem tamamlanmadan sonraki işlem başlamıyorsa buna senkron çalışma mantığı diyebiliriz

// console.log("Birinci");
// console.log("İkinci");
// console.log("Üçüncü");

//! 2) Asenkron JavaScript
// Bazı işlemler zaman alabilir
// Örneğin: Sunucudan veri alma, API isteği, Dosya İşlemi
// JavaScript bu işlemlerin bitmesini beklerken uygulamanın tamamen durmasını istemez
// Bu nedenle asenkron işlemler kullanılır

//! 3) setTimeout()
// Belirli bir süre sonra bir fonksiyon çalıştırır
// setTimeOut(fonksiyon, ms)
// setTimeOut(), js kodlarının geri kalanını durdurmaz

console.log("Birinci");

setTimeout(() => console.log("İkinci"), 2000);

console.log("Üçüncü");

//! 4) clearTimeout()
// Bir setTimout() işlemini gerçekleşmeden önce iptal eder.
// Bir timeout'u durdurmak için return ettiği id'yi kullanırız.
const timeoutId = setTimeout(() => console.log("Dosya Yüklendi"), 5000);

clearTimeout(timeoutId);
