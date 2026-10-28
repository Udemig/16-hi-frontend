import { useContext } from "react";
import { BasketContext } from "../context/BasketContext";

const BasketInfo = () => {
  const { basket, clearBasket } = useContext(BasketContext);

  // sepetteki ürünlerin topl fiyatını hesapla
  const totalPrice = basket.reduce((total, item) => total + item.price, 0);

  return (
    <div className="border p-4 rounded my-5 fs-4">
      <p className="d-flex gap-3">
        <span>Ürün Adedi:</span>
        <b className="text-warning">{basket.length}</b>
      </p>

      <p className="d-flex gap-3">
        <span>Toplam Fiyat:</span>
        <b className="text-warning">{totalPrice}₺</b>
      </p>

      <button className="btn btn-dark" onClick={() => clearBasket()}>
        Ödeme Yap
      </button>
    </div>
  );
};

export default BasketInfo;
