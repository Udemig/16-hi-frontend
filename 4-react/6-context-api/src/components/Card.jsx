import { useContext } from "react";
import { BasketContext } from "./../context/BasketContext";

const Card = ({ product }) => {
  // BasketContext'den sepet dizisine ve ekleme fonksiyonuna eriş
  const { basket, addToBasket } = useContext(BasketContext);

  // ekrana basılan ürün sepette var mı?
  const inBasket = basket.some((item) => item.id === product.id);

  return (
    <div className="card py-2">
      <div className="card-body d-flex flex-column gap-1 justify-content-between">
        <div>
          <h4>{product.title}</h4>

          <p className="d-flex gap-2">
            <span>Kategori:</span>
            <b>{product.category}</b>
          </p>
          <p className="d-flex gap-2">
            <span>Fiyat:</span>
            <b>{product.price}₺</b>
          </p>
        </div>

        <button
          disabled={inBasket}
          className="rounded btn btn-dark"
          onClick={() => addToBasket(product)}
        >
          {inBasket ? "Sepette" : "Sepete Ekle"}
        </button>
      </div>
    </div>
  );
};

export default Card;
