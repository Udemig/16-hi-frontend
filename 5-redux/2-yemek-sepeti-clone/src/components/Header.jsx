import { ShoppingBasket, UtensilsCrossed } from "lucide-react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

const Header = () => {
  const { restaurants } = useSelector((store) => store.restaurantReducer);
  const { cart } = useSelector((store) => store.cartReducer);

  // sepetteki ürünlerin miktar değerlerini topla
  const totalAmount = cart.reduce((total, item) => total + item.amount, 0);

  return (
    <header className="sticky top-0 z-20 border-b border-zinc-200/70 bg-white/80 backdrop-blur-md">
      <div className="container">
        <div className="flex items-center justify-between gap-4 h-18">
          <Link to="/" className="text-2xl lg:text-3xl font-bold text-brand font-sr">
            Yemek Sepeti
          </Link>

          <div className="flex items-center gap-3 text-sm">
            <span className="pill">
              <UtensilsCrossed className="size-4" />
              Yakınınızda {restaurants.length} <span className="max-sm:hidden">restoran</span>
            </span>

            <Link
              to="/cart"
              className="flex items-center gap-2 rounded-full bg-brand px-4 py-2 text-white transition-colors hover:bg-brand-hover"
            >
              <ShoppingBasket className="size-5" />

              <span className="font-semibold">{totalAmount}</span>
            </Link>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
