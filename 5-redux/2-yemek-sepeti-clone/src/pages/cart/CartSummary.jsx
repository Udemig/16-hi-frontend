const CartSummary = ({ cart }) => {
  // toplam ürün adedini hesapla
  const totalAmount = cart.reduce((total, item) => total + item.amount, 0);
  // toplam fiyatı hesapla
  const totalPrice = cart.reduce((total, item) => total + item.amount * item.price, 0);

  return (
    <div className="box h-fit space-y-5 p-6 md:sticky md:top-28">
      <h2 className="text-xl font-semibold">Sipariş Detayları</h2>

      <div className="space-y-3 text-sm">
        <p className="flex items-center justify-between">
          <span className="text-zinc-500">Ürün Adedi</span>
          <span className="font-medium text-zinc-900">{totalAmount}</span>
        </p>

        <p className="flex items-center justify-between pt-3 border-t border-zinc-100">
          <span className="text-zinc-500">Toplam Fiyat</span>
          <span className="font-medium text-zinc-900">{totalPrice}₺</span>
        </p>
      </div>

      <button className="btn-primary w-full py-3">Siparişi Onayla</button>
    </div>
  );
};

export default CartSummary;
