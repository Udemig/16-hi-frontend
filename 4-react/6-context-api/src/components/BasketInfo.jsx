const BasketInfo = () => {
  return (
    <div className="border p-4 rounded my-5 fs-4">
      <p className="d-flex gap-3">
        <span>Ürün Adedi:</span>
        <b className="text-warning">??</b>
      </p>

      <p className="d-flex gap-3">
        <span>Toplam Fiyat:</span>
        <b className="text-warning">??</b>
      </p>

      <button className="btn btn-dark">Ödeme Yap</button>
    </div>
  );
};

export default BasketInfo;
