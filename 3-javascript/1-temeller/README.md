## JavaScript Nedir?

JavaScript, web sayfalarına **davranış ve programlama mantığı kazandıran bir programlama dilidir.**

JavaScript ile:

- Kullanıcı hareketlerini takip edebiliriz.
- Butonlara işlev verebiliriz.
- Formları kontrol edebiliriz.
- HTML elementlerini değiştirebiliriz.
- CSS classlarını değiştirebiliriz.
- Hesaplamalar yapabiliriz.
- Veri saklayabiliriz.
- API'lerden veri alabiliriz.
- Dinamik kullanıcı arayüzleri oluşturabiliriz.

## HTML, CSS ve JavaScript İlişkisi

- HTML → Yapı
- CSS → Görünüm
- JavaScript → Davranış ve Mantık

# 2. Ünite — JavaScript Nasıl Çalışır?

JavaScript kodları tarayıcı içerisinde bulunan bir **JavaScript Engine** tarafından çalıştırılır.

Chrome tarayıcısında kullanılan JavaScript Engine:

- V8

Temel çalışma mantığı:

1. Tarayıcı HTML dosyasını okur.
2. CSS dosyalarını işler.
3. JavaScript dosyalarını yükler.
4. JavaScript kodlarını çalıştırır.
5. Sonuç kullanıcıya gösterilir.

# 3. Ünite — Değişkenler ve Veri Tipleri

## 1. Değişken Nedir?

Değişkenler, program içerisinde kullanacağımız verileri saklamak için kullanılır.

JavaScript uygulamalarında sürekli olarak veri ile çalışırız.

Örneğin bir uygulamada:

- Kullanıcının adı
- Kullanıcının yaşı
- Ürün fiyatı
- Sepetteki ürün sayısı
- Kullanıcının giriş yapıp yapmadığı
- Bir ürünün stok durumu

gibi bilgileri program içerisinde saklamamız gerekir.

Bu verileri saklamak için değişkenlerden yararlanırız.

Öğrencilerin burada anlaması gereken temel düşünce:

> Değişken, daha sonra kullanmak üzere bir veriye isim vermemizi sağlar.

---

## 2. Değişken Neden Kullanılır?

Bir değeri doğrudan kodun içerisinde tekrar tekrar kullanmak yerine, bu değeri bir değişkende tutabiliriz.

Bu bize:

- Veriyi tekrar kullanma
- Veriyi değiştirme
- Daha okunabilir kod yazma
- Veriye anlamlı bir isim verme
- Programın durumunu takip etme

imkânı sağlar.

JavaScript programlarının büyük bölümü aslında:

- Veri alma
- Veriyi saklama
- Veriyi değiştirme
- Veriyi kontrol etme
- Veriyi kullanıcıya gösterme

üzerine kuruludur.

---

# 3. JavaScript'te Değişken Tanımlama

JavaScript'te değişken oluşturmak için üç farklı anahtar kelime bulunur:

- `var`
- `let`
- `const`

Modern JavaScript içerisinde ağırlıklı olarak:

- `let`
- `const`

kullanılır.

`var` ise eski JavaScript kodlarında sık karşılaşabileceğimiz bir yöntemdir.

---

# 4. `let`

`let`, daha sonra değeri değişebilecek değişkenler oluşturmak için kullanılır.

Öğrencilerin temel olarak şu mantığı anlaması yeterlidir:

> Eğer sakladığım veri ileride değişecekse `let` kullanabilirim.

`let` ile oluşturulan bir değişkenin değeri daha sonra güncellenebilir.

konularında `let` tekrar ele alınacaktır.

---

# 5. `const`

`const`, değişkenin başka bir değere yeniden atanmasını istemediğimiz durumlarda kullanılır.

Öğrencilere mümkün olduğunca şu alışkanlığı kazandırın:

> Eğer bir değişkeni daha sonra yeniden atamayacaksam önce `const` düşünürüm.

Modern JavaScript'te iyi bir başlangıç yaklaşımı:

- Öncelikle `const`
- Değer değişecekse `let`

kullanmaktır.

---

# 6. `let` ve `const` Arasındaki Temel Fark

Öğrencinin bu aşamada bilmesi gereken en temel fark:

## `let`

Değeri daha sonra değiştirilebilir.

## `const`

Başka bir değer yeniden atanamaz.

Bu aşamada `const` ile object ve array davranışlarının detayına girmeyin.

İleride reference type konusu işlendiğinde tekrar ele alınacaktır.

---

# 7. `var`

`var`, JavaScript'in eski değişken tanımlama yöntemlerinden biridir.

Öğrenciler `var` kelimesini bilmelidir çünkü:

- Eski projelerde görebilirler.
- İnternette eski JavaScript örneklerinde karşılaşabilirler.
- Eski eğitim kaynaklarında sık kullanılabilir.

Ancak yeni kodlarda temel tercih:

- `const`
- `let`

olmalıdır.
