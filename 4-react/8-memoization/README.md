# Memoization

- Bileşenlerin gereksiz yere render edilmesini veya fonksiyonların gereksiz hesaplamalar yapmasını önlemek için kullandığımız performans optimizasyonlarına denir

## Temel Mantık

- Eğer bir bileşenin veya fonksiyonun girdileri değişmiyorsa (prop,parametreler) sonuç değişmez ---> o zaman react'ın aynı işlemi yeniden yapmasına gerek olmamalı

## Yöntemler

1. useMemo()
2. React.memo()
3. useCallback()

## Cache (Önbellek)

- Verilerin daha hızlı erişilebilen bir yerde geçici olarak saklanmasıdır

- **Neden Gerekli**
- Bir veriyi her seferinde:
- - api'a tekrar istek atmak yerine ...
- - aynı hesaplamayı tekrar yapmak yerine ...
- - bir kez işlemli yapıp sonucu cage'de saklarsak sonraki yapıcağımız aynı işlemde baştan hesaplamak yerine cache'de saklanan cevabı kullanırız
- - ilk sefer: 10sn ------- sonraki sefer: 0.1sn

- **Benzetme**
- İnsanın geçici hafızasına benzetebiliriz
- Birine 25\*20 işleminin sonucunu sorarasınaız ortalama 5 saniye içerisinde size cevap verir
- Kısa süre içerisinde aynı kişiye aynı soruyu sorarasınız hafızasında zaten sonuç olduğu için tekrar hesaplama yapmadan soruyu duyduğu gibi cevap verir
- - Bu seneryodaki insan geçici hafızasının yazılımdaki karşılığı cache'dir

## useMemo() - Hesaplanmış Değerleri Hatırla

- useMemo, yoğun hesaplama yapan fonksiyonların ürettikleri sonuçları cache'de saklar.
- Ve aynı hespalama kısa süre içerisinde tekrar yapılacağında, baştan hesaplamak yerine ilk hesaplamanın cache'de tutulan sonucunu kullanır
- Bu seneryo hesaplamadaki girdilerin değişmediği durum için geçerlidir, girdi değişirse hesaplama baştan yapılmalır
