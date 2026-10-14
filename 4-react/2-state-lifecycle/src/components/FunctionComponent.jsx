import { useState, useEffect } from "react";

function FunctionComponent(props) {
  const [count, setCount] = useState(0);

  /*
   * Fonksiyonel bileşenlerde sınıflardan bildiriğimiz yaşam döngüsü methodlarını kullanamayız
   * Yaşam döngüsü methodlarının yerine useEffect adı verilen react hook'unu kullanırız
   * parametreler:
   * 1) çalışıcak fonksiyon
   * 2) bağımlılık dizisi (dependency array)
   */

  // bileşen ekrana geldiğinde çalışır - componentDidMount()
  useEffect(() => {
    console.log("Bileşen ekrana geldi");
  }, []);

  // bileşenin güncelleme anında çalışır - componentDidUpdate()
  useEffect(() => {
    console.log("Bileşen güncellendi");
  }, [count]);

  // bileşenin ekrandan ayrılma anında çalışan fonksiyon - componentWillUnmount(
  useEffect(() => {
    return () => console.log("Bileşen ekrandan ayrıldı");
  }, []);

  // her render anında çalışır
  useEffect(() => {
    console.log("bileşen render oldu", count);
    // setCount(count + 1);
  });

  return (
    <div>
      <h1>{props.title}</h1>

      <button onClick={() => setCount(count + 1)}>Arttır: {count}</button>
    </div>
  );
}

export default FunctionComponent;
