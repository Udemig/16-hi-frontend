import { Link } from "react-router-dom";
import BasketInfo from "../components/BasketInfo";
import BasketCard from "../components/BasketCard";
import { useBasket } from "../context/BasketContext";

const Basket = () => {
  const { basket } = useBasket();

  return (
    <div className="container">
      <div className="d-flex justify-content-between align-items-center">
        <h1 className="my-2 fs-1">Sepetiniz</h1>
      </div>

      <div className="d-flex flex-column gap-5">
        {basket.length === 0 ? (
          <p className="text-center my-5 lead">
            <span>Sepetiniz Boş</span>
            <Link to="/" className="d-block my-4">
              Ürünler'e Git
            </Link>
          </p>
        ) : (
          basket.map((product) => <BasketCard key={product.id} product={product} />)
        )}
      </div>

      <BasketInfo />
    </div>
  );
};

export default Basket;
