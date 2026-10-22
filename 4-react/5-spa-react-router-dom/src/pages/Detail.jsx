import { Link, useParams } from "react-router-dom";
import useFetch from "./../hooks/useFetch";

const Detail = () => {
  // urldeki parametreyi getirir
  const { id } = useParams();

  // api'dan id'si bilenen kitabın bilgilerini al
  const { isLoading, error, data } = useFetch(`/books/${id}`);

  if (isLoading) return <h1>Yükleniyor...</h1>;

  if (error) return <h1>Üzgünüz bir hata oluştu</h1>;

  return (
    <div className="p-5">
      <Link to="/ürünler">Geri</Link>

      <div className="text-center">
        <h1>{data.title}</h1>

        <img src={data.image} className="img-fluid rounded mb-2" style={{ maxHeight: 400 }} />

        <p className="lead">{data.description}</p>

        <div className="d-grid gap-3 mt-3" style={{ gridTemplateColumns: "repeat(2,1fr)" }}>
          <div className="d-flex flex-column p-3 rounded bg-secondary-subtle">
            <span>Yazar</span>
            <span className="fw-semibold">{data.author}</span>
          </div>

          <div className="d-flex flex-column p-3 rounded bg-secondary-subtle">
            <span>Kategori</span>
            <span className="fw-semibold">{data.category}</span>
          </div>

          <div className="d-flex flex-column p-3 rounded bg-secondary-subtle">
            <span>Yıl</span>
            <span className="fw-semibold">{data.year}</span>
          </div>

          <div className="d-flex flex-column p-3 rounded bg-secondary-subtle">
            <span>Sayfa</span>
            <span className="fw-semibold">{data.page}</span>
          </div>

          <div className="d-flex flex-column p-3 rounded bg-secondary-subtle">
            <span>Fiyat</span>
            <span className="fw-semibold">{data.price} ₺</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Detail;
