import { Link } from "react-router-dom";
import BasketInfo from "../components/BasketInfo";

const Basket = () => {
  return (
    <div className="container">
      <div className="d-flex justify-content-between align-items-center">
        <h1 className="my-2 fs-1">Sepetiniz</h1>
      </div>

      <div className="d-flex flex-column gap-5">
        <p className="text-center my-5 lead">
          <span>Sepetiniz Boş</span>
          <Link to="/" className="d-block my-4">
            Ürünler'e Git
          </Link>
        </p>
      </div>

      <BasketInfo />
    </div>
  );
};

export default Basket;
