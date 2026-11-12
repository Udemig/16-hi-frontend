import { Minus, Plus, Trash } from "lucide-react";
import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { deleteFromCart, updateAmount } from "../../redux/actions/cartActions";

const CartItem = ({ product }) => {
  const dispatch = useDispatch();

  return (
    <div className="box flex gap-4 p-4">
      <img src={product.photo} alt={product.title} className="size-27.5 rounded-2xl object-cover" />

      <div className="w-full flex flex-col justify-between gap-4">
        <Link
          to={`/restaurant/${product.restaurantId}`}
          className="text-xl font-semibold text-zinc-900 hover:text-brand"
        >
          {product.title}
        </Link>

        <div className="flex flex-wrap items-center justify-between gap-4">
          <p className="text-lg font-semibold">{product.price}₺</p>

          <div className="flex items-center gap-3">
            <div className="flex items-center gap-2 rounded-full border border-zinc-200 bg-zinc-50 px-2">
              <button
                className="card-button"
                disabled={product.amount === 1}
                onClick={() => dispatch(updateAmount(product.id, product.amount - 1))}
              >
                <Minus className="size-4" />
              </button>

              <span className="text-lg font-semibold">{product.amount}</span>

              <button
                className="card-button"
                onClick={() => dispatch(updateAmount(product.id, product.amount + 1))}
              >
                <Plus className="size-4" />
              </button>
            </div>

            <button
              className="rounded-full border border-zinc-200 p-2 text-zinc-500 hover:border-red-200 hover:bg-red-50 hover:text-brand"
              onClick={() => dispatch(deleteFromCart(product.id))}
            >
              <Trash className="size-4" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CartItem;
