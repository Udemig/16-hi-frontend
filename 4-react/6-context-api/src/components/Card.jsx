const Card = ({ product }) => {
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

        <button className="rounded btn btn-dark">Sepete Ekle</button>
      </div>
    </div>
  );
};

export default Card;
