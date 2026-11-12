import { useSelector } from "react-redux";
import Loader from "../../components/Loader";
import Error from "../../components/Error";
import CartEmpty from "./CartEmpty";
import CartItem from "./CartItem";
import CartSummary from "./CartSummary";

const Cart = () => {
  const { loading, error, cart } = useSelector((store) => store.cartReducer);

  return (
    <div className="container space-y-8 pt-10">
      <div>
        <span className="pill">Siparişiniz</span>

        <h1 className="mt-3 text-3xl md:text-4xl font-semibold">Sepet</h1>

        <p className="muted mt-2 text-base">
          Eklediğiniz ürünleri düzenleyin ve teslimata hazırlayın
        </p>
      </div>

      <div className="grid items-start gap-6 md:grid-cols-[1fr_320px]">
        <div className="space-y-4">
          {loading ? (
            <Loader />
          ) : error ? (
            <Error message={error} />
          ) : cart.length === 0 ? (
            <CartEmpty />
          ) : (
            cart.map((product) => <CartItem key={product.id} product={product} />)
          )}
        </div>

        <CartSummary cart={cart} />
      </div>
    </div>
  );
};

export default Cart;
