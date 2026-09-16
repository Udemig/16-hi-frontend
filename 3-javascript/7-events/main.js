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

//! 5) setInterval()
// Belirli aralıklara tekrar tekrar fonnksiyon çalışıtır
// setInterval(fonksiyon, ms)

const intervalId = setInterval(() => document.write("<br> Interval Çalıştı"), 3000);

//! 6) clearInterval()
clearInterval(intervalId);

//! 7) Callback() Nedir?
// Başka bir fonksiyona argument olarak göndeirlen fonksiyona callback denir

document.addEventListener("click", () => {});

[1, 2, 3].forEach(() => {});

setTimeout(() => {}, 2000);

/*
 ! 8) Promise Nedir?
 * Promise, gelecekte tamamlanacak bir işlemin sonucunu temsil eder.
 * Bir Promise üç durumda olabilir:
 
 * Pending
 * İşlem devam ediyor
  
 * Fulfilled
 * İşlem başarıyla tamamlandı
  
 * Rejected
 * İşlem başarıssız oldu  
  
 * Örnek
 * Dosyayı yükleme başladım > pending
 * Dosya başarıyla yüklendi > fulfilled 
 * Dosya yüklenirken bir hata oluştu > rejected
*/

// Promise Oluşturma
const promise = new Promise((resolve, reject) => {
  const success = true;

  if (success) {
    resolve("Dosya başarıyla yüklendi!");
  } else {
    reject("Dosya yüklemesi başarısız :(");
  }
});

// Promise'in sonucunu nasıl yönetiriz
// .then: promise başarılı olduğunda çalışır
// .catch: işlem başarısız olduğunda çalışır
// .finally: işlem başarılı da başarısız da olsa çalışır
promise
  .then((result) => {
    console.log(".then çalıştı sonuç: " + result);
  })
  .catch((error) => {
    console.log(".catch çalıştı: " + error);
  })
  .finally(() => {
    console.log(".finally çalıştı");
  });

/* 
 ! 9) API
 * Application Programming Interface, farklı uygulamarın birbirleriyle alışveriş yapmasını sağlayan bir arayüzdür.
 
 * Örneğin frontend uygulamamızıın bir sunucudan:
 * Ürünleri
 * Kullanıcıları
 * Siparişleri
 * Anlık Kurye Konumu
 * API üzerinden alınabilir


  ! 10. Client ve Server
  * Frontend uygulaması genellikle client tarafıdır.

```text
Client
↓
Request
↓
Server
↓
Response
↓
Client
```

Frontend sunucuya istek gönderir.

Sunucu bir cevap döndürür.

---

 ! 11. HTTP Request

 * Frontend tarafından sunucuya gönderilen isteğe request denir.

Örneğin:

```text
Ürünleri bana gönder.
```

---

! 12. HTTP Response

* Sunucunun gönderdiği cevaba response denir.

Örneğin:

```json
[
    {
        "id": 1,
        "name": "Laptop"
    }
]
```

! 13. HTTP Methodları

En sık kullanılan HTTP methodları:

```text
GET
POST
PUT
PATCH
DELETE
```

---

! 14. GET

Sunucudan veri almak için kullanılır.

```text
GET /products
```

Örneğin:

```text
Bütün ürünleri getir.
```

---

! 15. POST

Sunucuya yeni veri göndermek için kullanılır.

```text
POST /products
```

Örneğin:

```text
Yeni ürün oluştur.
```

---

! 16. PUT

Bir kaynağı tamamen güncellemek için kullanılabilir.

```text
PUT /products/5
```

---

! 17. PATCH

Bir kaynağın belirli alanlarını güncellemek için kullanılır.

```text
PATCH /products/5
```

Örneğin sadece fiyatı değiştirmek:

```json
{
    "price": 35000
}
```

---

! 18. DELETE

Bir kaynağı silmek için kullanılır.

```text
DELETE /products/5
```

---

! 19. REST API Mantığı

Örnek bir ürün API yapısı:

```text
GET    /products      > Bütün ürünleri getir
GET    /products/5    > 5 id'li ürünü getir
POST   /products      > Yeni ürün ekle
PATCH  /products/5    > 5 id'li ürünü kısmi güncelle
PUT    /products/5    > 5 id'li ürünü güncelle
DELETE /products/5    > 5 id'li ürünü kaldır
```

Bu yapı REST API'lerde sık görülür.

---

*/

/*
 ! 20) FETCH API
 * Javascript ile HTTP request göndermek için tarayıcıda bulunan `fetch` fonksiyonunu kullanırız
 * fetch(url)
 * `fetch()` bir Promise döndürür.
*/

// HTTP GET isteği at
fetch("https://dummyjson.com/recipes?select=name,price,cuisine")
  // olumlu yanıt gelirse: yanıtı js formatına çevir
  .then((result) => result.json())
  // olumlu yanıt gelirse: tarif isimlerini ekrana bas
  .then((data) => data.recipes.forEach((recipe) => document.write("<br>" + recipe.name)))
  // olumsuz yanıt gelirse: hata mesajını ekrana bas
  .catch((error) => document.write("Bir sorun oluştu!!"));

//! 21) Async Await
// A) API'dan kullanıcı verilerini getiren fonksiyon
const getUsersOne = () => {
  fetch("https://dummyjson.com/users")
    .then((res) => res.json())
    .then((data) => console.log(data))
    .catch((err) => console.log(err))
    .finally(() => console.log("yükleme bitti"));
};
getUsersOne();

// B) API'dan kullanıcı verilerini getiren fonksiyon
const getUsersTwo = async () => {
  try {
    const res = await fetch("https://dummyjson.com/users", { method: "GET" });

    const data = await res.json();

    console.log(data);
  } catch (error) {
    console.log(error);
  } finally {
    console.log("yüklenme bitti");
  }
};
getUsersTwo();

/*
 ! 22) try....catch
 * Hata oluşturabilecek kodları kontrol etmek için kullanılır.
 ```
  try { console.log("İşlem başladı"); }
  catch (error) { console.log("Hata oluştu"); }
 ```
*/

/*
 ! 23) API İsteği Hakkında

 ? 1) URL
 * isteğin gönderiliceği adrestir
 * https://dummyjson.com/users
 * https > protocol
 * dummyjson.com > domain
 * users > endpoint
  
 ? 2) HTTP Method
 * Sunucuya ne yapmak istediğimizi belirtir
 * GET:        Veri getir
 * POST:       Veri oluştur
 * PUT|PATCH:  Veri güncelle
 * DELETE:     Veri sil
 ```
 fetch("https://api.example.com/users", {
  method: "GET"
 });
 ``` 

 ? 3) Headers
 * İstek hakkında ek bilgi gönderir  
 * Content-Type: Gönderdiğim verinin formatı nedir?
 * Authorization: API'a kim olduğumuzu haber verir
 * Language: API'ın döndürmesi gereken dil verisi
 ```
 fetch(url, {
  headers: {
    "Content-Type": "application/json",
    "Authorization": "Bearer TOKEN"
  }
  });
 ```

 ? 4) Body
 * Sunucuya gönderdiğimiz asıl veri.
 ```
 fetch("https://api.example.com/users", {
  method: "POST",
  headers: {
    "Content-Type": "application/json"
  },
  body: JSON.stringify({
    name: "Furkan",
    age: 22
  })
});
 ```

  ? 5) Response
  * Sunucudan isteğimize dönen yanıt.
  
  ? 6) Status Code
  * İsteğin sonucunu belirten durum kodudur.
    200 → Başarılı
    201 → Oluşturuldu
    400 → Hatalı istek
    401 → Yetkisiz
    403 → Erişim yasak
    404 → Bulunamadı
    500 → Sunucu hatası
*/
