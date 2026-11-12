import { Plus } from "lucide-react";
import { useDispatch, useSelector } from "react-redux";
import { addToCart, updateAmount } from "../../redux/actions/cartActions";

const ProductCard = ({ product }) => {
  // dispatch kurulum
  const dispatch = useDispatch();

  // sepet verisine abone ol
  const { cart } = useSelector((store) => store.cartReducer);

  // ekrana basılan ürünü sepet dizisinde ara
  const cartItem = cart.find((item) => product.id == item.id);

  // ekle butonuna tıklanınca
  const handleClick = () => {
    cartItem
      ? // ürün sepette varsa miktarını arttır
        dispatch(updateAmount(cartItem.id, cartItem.amount + 1))
      : // ürün sepette yoksa sepete ekle
        dispatch(addToCart(product));
  };

  return (
    <div className="box box-interactive grid grid-cols-[1fr_130px] gap-4 p-4">
      <div className="flex flex-col justify-between gap-3">
        <div>
          <h1 className="text-xl font-semibold">{product.title}</h1>
          <p className="muted mt-1 line-clamp-2">{product.desc}</p>
        </div>

        <p className="text-lg font-semibold">{product.price}₺</p>
      </div>

      <div className="relative rounded-xl overflow-hidden">
        <img src={product.photo} alt={product.title} className="object-cover size-full max-h-30" />

        <button
          className="absolute right-2 bottom-2 grid size-9 place-items-center rounded-full bg-white font-semibold text-brand ring-1 ring-zinc-900/5 hover:bg-zinc-200"
          onClick={handleClick}
        >
          {cartItem ? cartItem.amount : <Plus />}
        </button>
      </div>
    </div>
  );
};

export default ProductCard;
