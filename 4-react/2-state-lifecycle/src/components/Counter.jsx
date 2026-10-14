import { useState } from "react";

/*
 * React'da arayüzde değişime sebep olucak bütün veriler state'de tutulur
 * useState parametre olarak tutucağımız verinin başlangıç değerini alır
 * useState fonksiyonu çağrılınca geriye dizi içerisinde 2 veri döndürür
 * [stateDegeri,stateGuncelle]
 * stateDegeri ni değiştirmek için sadece stateGuncelleme fonksiyonuna yeni değer parametre olarak gönderilmeli
 */
const Counter = () => {
  const [stateDegeri, stateGuncelle] = useState(0);

  return (
    <div>
      <h1>Sayaç</h1>

      <button onClick={() => stateGuncelle(stateDegeri - 1)}>Azalt</button>

      <h2>Sayaç Değeri: {stateDegeri}</h2>

      <button
        onClick={() => {
          // setState methodu 1. kullanım
          // aynı fonksiyon içerisinde state'i 1'den fazla kere güncelleyemiyoruz
          stateGuncelle(stateDegeri + 1);
          stateGuncelle(stateDegeri + 1);
          stateGuncelle(stateDegeri + 1);

          // setState methodu 2. kullanım
          // aynı fonksiyon içerisinde state'i 1'den fazla kere güncelleyebiliyoruz
          stateGuncelle((sonDeger) => sonDeger + 1);
          stateGuncelle((sonDeger) => sonDeger + 1);
          stateGuncelle((sonDeger) => sonDeger + 1);
        }}
      >
        Arttır
      </button>
    </div>
  );
};

export default Counter;
