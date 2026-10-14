import { useState } from "react";

const BuyList = () => {
  const [productList, setProductList] = useState([]);

  // form gönderilince çalışır
  const handleSubmit = (e) => {
    e.preventDefault(); // sayfa yenilemesini engelle

    const text = e.target[0].value; // inputtaki yazı

    setProductList([...productList, text]); // diziye yeni ürünü ekle - state'i güncelle

    e.target.reset(); // inputu temizle
  };

  return (
    <div>
      <h1>Alışveriş Listesi</h1>

      <form onSubmit={handleSubmit}>
        <input type="text" placeholder="ürün adı" />
        <button type="submit">ekle</button>
      </form>

      <ul>
        {productList.map((product, index) => (
          <li key={index}>{product}</li>
        ))}
      </ul>
    </div>
  );
};

export default BuyList;
